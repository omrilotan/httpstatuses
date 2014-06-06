# HTTP Statuses

Plain-English interface for working with HTTP status codes.

[![Build Status badge](http://img.shields.io/travis/rampantmonkey/httpstatuses.svg?style=flat)](https://travis-ci.org/rampantmonkey/httpstatuses) [![npm package version badge](http://img.shields.io/npm/v/httpstatuses.svg?style=flat)](https://www.npmjs.org/package/httpstatuses) [![license badge](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](http://opensource.org/licenses/MIT)

## Why?

The standard `http` module provides a [`STATUS_CODES` object](http://nodejs.org/api/http.html#http_http_status_codes) that returns a string describing the given status code. While this is quite useful, I want to go the opposite way with the goal of improving code readability.

## Example

    httpStatuses = require('httpstatuses')
    console.log(httpStatuses.not_found) # 404
    console.log(httpStatuses[404]) # Not Found

## License
_This software is released under the MIT license._
You can find a copy in [LICENSE.txt](LICENSE.txt) or at [opensource.org](http://opensource.org/licenses/MIT).
