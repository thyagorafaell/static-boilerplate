module.exports = {
  deps: [],
  fn: function() {
    var sequence = require('run-sequence');
    sequence('clean', ['assets:build', 'js:build', 'css:build', 'html:build']);
  }
};