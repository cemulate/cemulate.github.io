const yaml = require('js-yaml');

const kramed = require('kramed');

module.exports = function(eleventyConfig) {
    eleventyConfig.setLibrary('md', { render: kramed });

    // Build output of academic website repo
    eleventyConfig.addPassthroughCopy({ '_math_website_site': 'math' });
    eleventyConfig.addPassthroughCopy('.nojekyll');
    eleventyConfig.addPassthroughCopy('styles');
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('js');
    eleventyConfig.addDataExtension('yaml', contents => yaml.safeLoad(contents));

    eleventyConfig.addFilter('find_data', (arr, attr, value) => {
        return arr.find(x => x.data[attr] == value);
    });
    eleventyConfig.addFilter('where_data', (arr, attr, value) => {
        return arr.filter(x => x.data[attr] == value);
    });
    eleventyConfig.addFilter('markdownify', str => kramed(str));

    return { htmlTemplateEngine: false };
};
