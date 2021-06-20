module.exports = {
  presets: [
    require( './node_modules/berries/tailwind-berries.config' )
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  corePlugs: false,
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './keep/data.json'
  ],
}
