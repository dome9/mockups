const { Cluster } = require( 'puppeteer-cluster' );
var fs = require( 'fs-extra' );



module.exports = {

    async generate( options, states ) {
        const cluster = await Cluster.launch( {
            concurrency: Cluster.CONCURRENCY_CONTEXT,
            maxConcurrency: 4,
            monitor: true,
        } );

        await cluster.task( async ( { page, data: data } ) => {
            await page.setViewport( {
                width: 1440,
                height: 900,
                deviceScaleFactor: 2,
            } );
            await page.goto( data.url, { waitUntil: 'domcontentloaded' } );
            const screen = await page.screenshot();
            fs.ensureDirSync( options.slidesPath );
            await fs.writeFile(
                `${options.slidesPath}/${data.slideName
                }.png`,
                screen
            );
        } );

        cluster.on( 'taskerror', ( err, data ) => {
            console.log( `  Error crawling ${data}: ${err.message}` );
        } );

        if ( options.slide ) {
            console.log( options.slide );
            cluster.queue( {
                url: `http://localhost:${options.PORT}/${options.slide}`,
                slideName: options.slide,
            } );
        } else {
            for ( let i = 0; i < states.length; i++ ) {
                const state = states[i];
                console.log( state );

                if ( !options.force ) {
                    if (
                        !fs.existsSync(
                            `${options.slidesPath}/${state.id
                            }.png`
                        )
                    ) {
                        cluster.queue( {
                            url: `http://localhost:${options.PORT}/${state.id}`,
                            slideName: state.id,
                        } );
                    }
                } else {
                    cluster.queue( {
                        url: `http://localhost:${options.PORT}/${state.id}`,
                        slideName: state.id,
                    } );
                }

            }
        }
        await cluster.idle();
        await cluster.close();
    },

    generateSlides( request ) {
        let projectId = request.body.params.projectId;
        let storyId = request.body.params.storyId;
        let slideId = request.body.params.slideId;
        let storySlides;
        let data = fs.readJsonSync( '../../public/assets/slides-data.json' );

        data.projects.forEach( project => {
            if ( project.id === projectId ) {
                project.stories.forEach( story => {
                    if ( story.id === storyId ) {
                        storySlides = story.slides;
                    }
                } );
            }
        } )

        let opt = {
            slide: slideId,
            force: true,
            PORT: 3000,
            slidesPath: '../../assets/thumbnails',
        };
        module.exports.generate( opt, storySlides );
    }

};