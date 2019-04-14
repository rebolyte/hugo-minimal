class TailwindExtractor {
	static extract(content) {
		return content.match(/[A-z0-9-:\/]+/g)
	}
}

module.exports = {    
  plugins: [        
    require('postcss-import')({
      path: ['assets/css'],
    }),
    require('tailwindcss')('./assets/css/tailwind.config.js'),
    require('postcss-nested'),
    require('@fullhuman/postcss-purgecss')({
      content: ['layouts/**/*.html'],
      extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ['html']
      }], 
      fontFace: true,
      // Target all classes here that are dynamically assembled somewhere in a template,
			// e.g. with `grid-columns-{{ .Params.num_cols }}`
			// TODO: Revisit this!
      whitelist: [/grid-columns/, 'class2']
    }) 
  ]
}
