// vetur.config.js
/** @type {import('vls').VeturConfig} */
module.exports = {

	// **optional** default: `{}`
	// override vscode settings part
	// Notice: It only affects the settings used by Vetur.
	settings: {
		"vetur.useWorkspaceDependencies": true,
		"vetur.experimental.templateInterpolationService": false,
		"vetur.format.defaultFormatterOptions": {
			"prettyhtml": {
				"printWidth": 260, // No line exceeds 260 characters
			}
		}
	},
	// **optional** default: `[{ root: './' }]`
	// support monorepos

}