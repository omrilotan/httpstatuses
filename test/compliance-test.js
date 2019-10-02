var assert = require('assert'),
    httpStatus = require('../');

describe('Numeric and textual APIs are compliant', function () {
  for (var key in httpStatus) {
    (function(key) {
      if (/\d+/.test(key)) {
        var snake = httpStatus[key].replace(/\s/g, '_').replace(/-/g, '_').replace(/\W/g, '').toLowerCase();

        it([snake, key].join(' = '), function() {

          assert.equal(key, httpStatus[snake]);
        });
      } else if (/_/.test(key)) {
        var camel = camelise(key);

        it([camel, key].join(' = '), function() {
          assert.equal(httpStatus[key], httpStatus[camel]);
        });
      } else {
        var snake = snakise(key);

        it([snake, key].join(' = '), function() {
          assert.equal(httpStatus[key], httpStatus[snake]);
        });
      }
    })(key);
  }
});

function camelise(string) {
  return string.replace(/([_][a-z])/g, function(group) {
    return group.replace('_', '').toUpperCase();
  });
}

function snakise(string) {
  return string.replace(/([A-Z])/g, function(group) {
    return '_' + group.toLowerCase();
  });
}