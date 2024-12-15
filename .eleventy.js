const htmlmin = require("html-minifier");

function eleventyConfig(config) {
  // Passthroughs
  config.addPassthroughCopy("src/img");

  // Layout aliases
  config.addLayoutAlias("base", "layouts/base.njk");

  // Minify HTML
  const isProduction = process.env.ELEVENTY_ENV === "production";

  var htmlMinify = function (value, outputPath) {
    if (outputPath && outputPath.indexOf(".html") > -1) {
      return htmlmin.minify(value, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
      });
    }
  };

  // html min only in production
  if (isProduction) {
    config.addTransform("htmlmin", htmlMinify);
    config.addTransform("pathPrefix", "hey-11")
  }

  // Configuration
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      data: "data",
    },
    templateFormats: ["html", "njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}

module.exports = eleventyConfig;
