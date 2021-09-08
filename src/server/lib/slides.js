const fs = require( "fs-extra" );
const randomize = require( 'randomatic' );
const thumbnails = require( './thumbnails-server' );


module.exports = {

	modifySlidesListModule() {
		let slidesData = fs.readJsonSync( '../../public/assets/slides-data.json', 'utf8' );
		let slidesList = [];
		slidesData.projects.forEach( project => {
			project.stories.forEach( story => {
				story.slides.forEach( slide => {
					slidesList.push( slide.id );
				} );
			} );
		} );

		let slidesDataContent =
			`
import { createRouter, createWebHistory } from 'vue-router'
${slidesList.map( function ( component ) {
				return `\nimport  ${component} from '../mockups/${component}.vue';`
			} )
				.filter( ( value, index, self ) => self.indexOf( value ) === index )
				.join( "" )}
			
const routes = [
	${slidesList.map( function ( component ) {
		return`
	{
		path: "/${component}",
		name: "${component}",
		component: ${component}
	},`
				} ).join( "" )}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
} )

router.beforeEach( ( toRoute, fromRoute, next ) => {
    window.document.title = toRoute.meta && toRoute.fullPath ? toRoute.fullPath : 'Home';
	
		window.addEventListener(
			'message',
			event => {
				if ( event.data.type === 'navigation' ) {
					console.log('message')
					router.push( event.data.route );
				}
			}
		);
	
  
    next();
  })
export default router
`;
		fs.writeFileSync( '../router/index.js', slidesDataContent );

	},

	create( request ) {
		let projectId = request.body.params.projectId;
		let storyId = request.body.params.storyId;
		let slideId = randomize( 'AAAAAAAAAA' );
		let slide = {
			"id": slideId,
		}

		let data = fs.readJsonSync( '../../public/assets/slides-data.json' );

		data.projects.forEach( project => {
			if ( project.id === projectId ) {
				project.stories.forEach( story => {
					if ( story.id === storyId ) {
						story.slides.push( slide );
						fs.writeFileSync( '../../public/assets/slides-data.json', JSON.stringify( data, null, 4 ) );
						module.exports.write( slideId );
						module.exports.modifySlidesListModule();
					}
				} )
			}
		} );
		let opt = {
			slide: slideId,
			force: true,
			PORT: 3000,
			slidesPath: '../../../public/assets/thumbnails',
		};
		thumbnails.generate( opt );
	},

	write( id, content ) {
		let vueContent = '';
		if ( content !== undefined ) {
			vueContent = content.vue;
		} else {
			vueContent = `
<template>
	Hello there!
</template>

<script setup>


defineProps({
	msg: String,
});

const state = reactive({ count: 0 });
</script>

			`;
		}

		fs.writeFileSync( `../mockups/${id}.vue`, vueContent );
	},

	delete( request ) {
		let projectId = request.body.params.projectId;
		let storyId = request.body.params.storyId;
		let slideId = request.body.params.slideId;

		let data = fs.readJsonSync( '../../public/assets/slides-data.json' );

		data.projects.forEach( project => {
			if ( project.id === projectId ) {
				project.stories.forEach( story => {
					if ( story.id === storyId ) {
						story.slides.forEach( function ( slide, index, object ) {
							if ( slide.id === slideId ) {
								object.splice( index, 1 );
								fs.removeSync( `../app/slides/${slideId}`, { recursive: true } );
								fs.writeFileSync( '../../public/assets/slides-data.json', JSON.stringify( data, null, 4 ) );
								module.exports.modifySlidesListModule();
							}
						} );
					}
				} );
			}
		} )
	},

	deleteInstance( request ) {
		let projectId = request.body.params.projectId;
		let storyId = request.body.params.storyId;
		let slideId = request.body.params.slideId;

		let data = fs.readJsonSync( '../../public/assets/slides-data.json' );

		data.projects.forEach( project => {
			if ( project.id === projectId ) {
				project.stories.forEach( story => {
					if ( story.id === storyId ) {
						story.slides.forEach( function ( slide, index, object ) {
							if ( slide.id === slideId ) {
								object.splice( index, 1 );
								fs.writeFileSync( '../../public/assets/slides-data.json', JSON.stringify( data, null, 4 ) );
							}
						} );
					}
				} );
			}
		} )
	},
	
	duplicate(request) {
		let projectId = request.body.params.projectId;
		let storyId = request.body.params.storyId;
		let slideId = request.body.params.slideId;
		let newSlideId = randomize( 'AAAAAAAAAA' );

		let data = fs.readJsonSync( '../../public/assets/slides-data.json' );

		data.projects.forEach( project => {
			if ( project.id === projectId ) {
				project.stories.forEach( story => {
					if ( story.id === storyId ) {
						story.slides.unshift( {
							"id": newSlideId,
						} );
						fs.writeFileSync( '../../public/assets/slides-data.json', JSON.stringify( data, null, 4 ) );
						story.slides.forEach( function ( slide, index, object ) {
							if ( slide.id === slideId ) {
								let content = {};
								let re = new RegExp( `${slideId}`, 'g' );
								content['ts'] = fs.readFileSync( `../app/slides/${slideId}/slide.ts`, "utf-8" ).replace( re, newSlideId );
								content['html'] = fs.readFileSync( `../app/slides/${slideId}/slide.html`, "utf-8" );
								module.exports.write( newSlideId, content );
							}
						} );
					}
				} );
			}
			module.exports.modifySlidesListModule();
		} )

		let opt = {
			slide: newSlideId,
			force: true,
			PORT: 2000,
			slidesPath: '../../../public/assets/thumbnails',
		};
		thumbnails.generate( opt );
	}
}