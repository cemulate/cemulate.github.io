const yaml = require('js-yaml');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('styles');
    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addDataExtension('yaml', contents => yaml.safeLoad(contents));

    eleventyConfig.addFilter('find_data', (arr, attr, value) => {
        return arr.find(x => x.data[attr] == value);
    });
    eleventyConfig.addFilter('where_data', (arr, attr, value) => {
        return arr.filter(x => x.data[attr] == value);
    });
};
