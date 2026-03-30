export default function(eleventyConfig) {
  // Pass through CSS and assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/robots.txt");

  // Set input/output dirs
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
      layouts: "_includes"
    },
    templateFormats: ["njk", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
}
