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
      content: ['layouts/**/*.html', 'assets/js/**/*.js', 'content/**/*.md'],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ['html', 'js', 'md']
        }
      ], 
      fontFace: true,
      // Target all classes here that are dynamically assembled somewhere in a template,
			// e.g. with `grid-columns-{{ .Params.num_cols }}`
			// TODO: Revisit this!
      whitelist: ['blockquote', 'pre', 'code', 'table', 'th', 'tr', 'td', 'ul', 'ol'],
      whitelistPatterns: [/grid-columns/],
      rejected: true
    }) 
  ]
}
