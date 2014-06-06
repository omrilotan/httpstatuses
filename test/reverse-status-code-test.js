var assert = require('assert'),
    httpStatus = require('../')

describe('HTTP Status (Reverse)', function () {
  describe('Informational', function() {
    it('100', function () {
      assert.equal(httpStatus[100], 'Continue')
    })

    it('101', function () {
      assert.equal(httpStatus[101], 'Switch Protocols')
    })

    it('102', function () {
      assert.equal(httpStatus[102], 'Processing')
    })
  })

  describe('Success', function() {
    it('200', function () {
      assert.equal(httpStatus[200], 'OK')
    })
    it('201', function () {
      assert.equal(httpStatus[201], 'Created')
    })
    it('202', function () {
      assert.equal(httpStatus[202], 'Accepted')
    })
    it('203', function () {
      assert.equal(httpStatus[203], 'Non-Authoritative Information')
    })
    it('204', function () {
      assert.equal(httpStatus[204], 'No Content')
    })
    it('205', function () {
      assert.equal(httpStatus[205], 'Reset Content')
    })
    it('206', function () {
      assert.equal(httpStatus[206], 'Partial Content')
    })
    it('207', function () {
      assert.equal(httpStatus[207], 'Multi-Status')
    })
    it('208', function () {
      assert.equal(httpStatus[208], 'Already Reported')
    })
    it('226', function () {
      assert.equal(httpStatus[226], 'IM Used')
    })
  })

  describe('Redirection', function() {
    it('300', function () {
      assert.equal(httpStatus[300], 'Multiple Choices')
    })
    it('301', function () {
      assert.equal(httpStatus[301], 'Moved Permanently')
    })
    it('302', function () {
      assert.equal(httpStatus[302], 'Found')
    })
    it('303', function () {
      assert.equal(httpStatus[303], 'Se Other')
    })
    it('304', function () {
      assert.equal(httpStatus[304], 'Not Modified')
    })
    it('305', function () {
      assert.equal(httpStatus[305], 'Use Proxy')
    })
    it('306', function () {
      assert.equal(httpStatus[306], 'Switch Proxy')
    })
    it('307', function () {
      assert.equal(httpStatus[307], 'Temporary Redirect')
    })
    it('308', function () {
      assert.equal(httpStatus[308], 'Permanent Redirect')
    })
  })

  describe('Client Error', function() {
    it('400', function () {
      assert.equal(httpStatus[400], 'Bad Request')
    })
    it('401', function () {
      assert.equal(httpStatus[401], 'Unauthorized')
    })
    it('402', function () {
      assert.equal(httpStatus[402], 'Payment Required')
    })
    it('403', function () {
      assert.equal(httpStatus[403], 'Forbidden')
    })
    it('404', function () {
      assert.equal(httpStatus[404], 'Not Found')
    })
    it('405', function () {
      assert.equal(httpStatus[405], 'Method Not Allowed')
    })
    it('406', function () {
      assert.equal(httpStatus[406], 'Not Acceptable')
    })
    it('407', function () {
      assert.equal(httpStatus[407], 'Proxy Authentication Required')
    })
    it('408', function () {
      assert.equal(httpStatus[408], 'Request Timeout')
    })
    it('409', function () {
      assert.equal(httpStatus[409], 'Conflict')
    })
    it('410', function () {
      assert.equal(httpStatus[410], 'Gone')
    })
    it('411', function () {
      assert.equal(httpStatus[411], 'Length Required')
    })
    it('412', function () {
      assert.equal(httpStatus[412], 'Precondition Failed')
    })
    it('413', function () {
      assert.equal(httpStatus[413], 'Request Entity Too Large')
    })
    it('414', function () {
      assert.equal(httpStatus[414], 'Request-URI Too Long')
    })
    it('415', function () {
      assert.equal(httpStatus[415], 'Unsupported Media Type')
    })
    it('416', function () {
      assert.equal(httpStatus[416], 'Requested Range Not Satisfiable')
    })
    it('417', function () {
      assert.equal(httpStatus[417], 'Expectation Failed')
    })
    it('418', function () {
      assert.equal(httpStatus[418], "I'm a teapot")
    })
    it('419', function () {
      assert.equal(httpStatus[419], 'Authentication Timeout')
    })
    it('422', function () {
      assert.equal(httpStatus[422], 'Unprocessable Entity')
    })
    it('423', function () {
      assert.equal(httpStatus[423], 'Locked')
    })
    it('424', function () {
      assert.equal(httpStatus[424], 'Failed Dependency')
    })
    it('425', function () {
      assert.equal(httpStatus[425], 'Unordered Collection')
    })
    it('426', function () {
      assert.equal(httpStatus[426], 'Upgrade Required')
    })
    it('428', function () {
      assert.equal(httpStatus[428], 'Precondition Required')
    })
    it('429', function () {
      assert.equal(httpStatus[429], 'Too Many Requests')
    })
    it('431', function () {
      assert.equal(httpStatus[431], 'Request Header Fields Too Large')
    })
    it('440', function () {
      assert.equal(httpStatus[440], 'Login Timeout')
    })
    it('444', function () {
      assert.equal(httpStatus[444], 'No Response')
    })
    it('449', function () {
      assert.equal(httpStatus[449], 'Retry With')
    })
    it('450', function () {
      assert.equal(httpStatus[450], 'Blocked by Windows Parental Controls')
    })
    it('451', function () {
      assert.equal(httpStatus[451], 'Unavailable for Legal Reasons')
    })
    it('494', function () {
      assert.equal(httpStatus[494], 'Request Header Too Large')
    })
    it('495', function () {
      assert.equal(httpStatus[495], 'Cert Error')
    })
    it('496', function () {
      assert.equal(httpStatus[496], 'No Cert')
    })
    it('497', function () {
      assert.equal(httpStatus[497], 'HTTP to HTTPS')
    })
    it('499', function () {
      assert.equal(httpStatus[499], 'Client Closed Request')
    })
  })

  describe('Server Error', function() {
    it('500', function () {
      assert.equal(httpStatus[500], 'Internal Server Error')
    })
    it('501', function () {
      assert.equal(httpStatus[501], 'Not Implemented')
    })
    it('502', function () {
      assert.equal(httpStatus[502], 'Bad Gateway')
    })
    it('503', function () {
      assert.equal(httpStatus[503], 'Service Unavailable')
    })
    it('504', function () {
      assert.equal(httpStatus[504], 'Gateway Timeout')
    })
    it('505', function () {
      assert.equal(httpStatus[505], 'HTTP Version Not Supported')
    })
    it('506', function () {
      assert.equal(httpStatus[506], 'Variant Also Negotiates')
    })
    it('507', function () {
      assert.equal(httpStatus[507], 'Insufficient Storate')
    })
    it('508', function () {
      assert.equal(httpStatus[508], 'Loop Detected')
    })
    it('509', function () {
      assert.equal(httpStatus[509], 'Bandwidth Limit Exceeded')
    })
    it('510', function () {
      assert.equal(httpStatus[510], 'Not Extended')
    })
    it('511', function () {
      assert.equal(httpStatus[511], 'Network Authentication Required')
    })
    it('520', function () {
      assert.equal(httpStatus[520], 'Origin Error')
    })
    it('521', function () {
      assert.equal(httpStatus[521], 'Web Server is Down')
    })
    it('522', function () {
      assert.equal(httpStatus[522], 'Connection Timed Out')
    })
    it('523', function () {
      assert.equal(httpStatus[523], 'Proxy Declined Request')
    })
    it('524', function () {
      assert.equal(httpStatus[524], 'A Timeout Occurred')
    })
    it('598', function () {
      assert.equal(httpStatus[598], 'Network Read Timeout Error')
    })
    it('599', function () {
      assert.equal(httpStatus[599], 'Network Connect Timeout Error')
    })
  })
})
