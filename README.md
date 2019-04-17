
The Repo is a working example of Hugo's Pipes functionality using TailwindCSS and PurgeCSS.

- [Hugo Pipes](https://gohugo.io/hugo-pipes/)
- [TailwindCSS](https://github.com/tailwindcss/tailwindcss) (with a custom extractor for PurgeCSS)

- [PostCSS](https://github.com/postcss/postcss)
- [PurgeCSS](https://github.com/FullHuman/purgecss)
- [AutoPrefixer](https://github.com/postcss/autoprefixer)
- [PostCSS-Import](https://github.com/postcss/postcss-import) (because the importer that I think is native to Tailwind doesn't seem to work in this context)

The critical file is `/assets/css/postcss.config.js` and `/assets/css/dev/postcss.config.js`

### Deployment Notes

Hugo will not [rebuild](https://discourse.gohugo.io/t/regenerating-assets-directory-for-hugo-pipes/13175) your CSS file unless the file itself is changed. In a TailwindCSS context, most of your work occurs in templates, not in the CSS file. To make development easier, we've created a separate PostCSS [config](https://github.com/postcss/postcss-cli#config) file without PurgeCSS.

- **Before deploying, run `hugo --gc` to generate a minified, purged CSS file.** 
- Check the `resources` folder into your repository.

### Other Notes

- PurgeCSS will fail if any of your templates are empty.
- If you add themes, you need to add the file location in the PurgeCSS `content` configuration item.

## TODO

* Implement some kind of work-around for NetlifyCMS widgets that depend on a field's value (e.g. 
a media block that displays either an image or a video, or disabling "image position" selection
if there is no image). See [this issue](https://github.com/netlify/netlify-cms/issues/565).

[![Netlify Status](https://api.netlify.com/api/v1/badges/2fade68f-423c-44b1-80b5-ce4323ad3b8e/deploy-status)](https://app.netlify.com/sites/hugo-minimal/deploys)