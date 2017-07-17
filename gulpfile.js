global.plugins = require('gulp-load-plugins')();
global.project = require(process.cwd() + '/project.json');
global.options = require(process.cwd() + '/options.json');
global.siteData = require(process.cwd() + '/src/data/site.json');

require('gulp-require-tasks')();
