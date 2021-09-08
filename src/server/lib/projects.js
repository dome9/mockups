const fs = require( "fs-extra" );
const randomize = require( 'randomatic' );


module.exports = {
	
	create() {
		let blankProject = {
			"id": randomize( 'AAAAA' ),
			"name": "New Project",
			"domain": "http://localhost:2000",
			"stories": []
		};
		let data = fs.readJsonSync( '../public/assets/slides-data.json' );
		data.projects.push( blankProject );
		fs.writeFileSync( '../public/assets/slides-data.json', JSON.stringify( data, null, 4 ) );
	}
}