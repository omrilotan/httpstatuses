var assert = require('assert'),
    httpStatus = require('../')

describe('HTTP Status', function () {
  describe('Informational', function() {
    it('100', function () {
      assert.equal(httpStatus.continue, 100)
    })

    it('101', function () {
      assert.equal(httpStatus.switchProtocols, 101)
    })

    it('102', function () {
      assert.equal(httpStatus.processing, 102)
    })
  })

  describe('Success', function() {
    it('200', function () {
      assert.equal(httpStatus.ok, 200)
    })
    it('201', function () {
      assert.equal(httpStatus.created, 201)
    })
    it('202', function () {
      assert.equal(httpStatus.accepted, 202)
    })
    it('203', function () {
      assert.equal(httpStatus.nonAuthoritative, 203)
    })
    it('204', function () {
      assert.equal(httpStatus.noContent, 204)
    })
    it('205', function () {
      assert.equal(httpStatus.resetContent, 205)
    })
    it('206', function () {
      assert.equal(httpStatus.partialContent, 206)
    })
    it('207', function () {
      assert.equal(httpStatus.multiStatus, 207)
    })
    it('208', function () {
      assert.equal(httpStatus.alreadyReported, 208)
    })
    it('226', function () {
      assert.equal(httpStatus.imUsed, 226)
    })
  })

  describe('Redirection', function() {
    it('300', function () {
     assert.equal(httpStatus.multipleChoices, 300)
    })
    it('301', function () {
     assert.equal(httpStatus.movedPermanently, 301)
    })
    it('302', function () {
     assert.equal(httpStatus.found, 302)
    })
    it('303', function () {
     assert.equal(httpStatus.seeOther, 303)
    })
    it('304', function () {
     assert.equal(httpStatus.notModified, 304)
    })
    it('305', function () {
     assert.equal(httpStatus.useProxy, 305)
    })
    it('306', function () {
     assert.equal(httpStatus.switchProxy, 306)
    })
    it('307', function () {
     assert.equal(httpStatus.temporaryRedirect, 307)
    })
    it('308', function () {
     assert.equal(httpStatus.permanentRedirect, 308)
    })
  })

  describe('Client Error', function() {
    it('400', function () {
     assert.equal(httpStatus.badRequest, 400)
    })
    it('401', function () {
     assert.equal(httpStatus.unauthorized, 401)
    })
    it('402', function () {
     assert.equal(httpStatus.paymentRequired, 402)
    })
    it('403', function () {
     assert.equal(httpStatus.forbidden, 403)
    })
    it('404', function () {
     assert.equal(httpStatus.notFound, 404)
    })
    it('405', function () {
     assert.equal(httpStatus.methodNotAllowed, 405)
    })
    it('406', function () {
     assert.equal(httpStatus.notAcceptable, 406)
    })
    it('407', function () {
     assert.equal(httpStatus.proxyAuthenticationRequired, 407)
    })
    it('408', function () {
     assert.equal(httpStatus.requestTimeout, 408)
    })
    it('409', function () {
     assert.equal(httpStatus.conflict, 409)
    })
    it('410', function () {
     assert.equal(httpStatus.gone, 410)
    })
    it('411', function () {
     assert.equal(httpStatus.lengthRequired, 411)
    })
    it('412', function () {
     assert.equal(httpStatus.preconditionFailed, 412)
    })
    it('413', function () {
     assert.equal(httpStatus.requestEntityTooLarge, 413)
    })
    it('414', function () {
     assert.equal(httpStatus.requestUriTooLong, 414)
    })
    it('415', function () {
     assert.equal(httpStatus.unsupportedMediaType, 415)
    })
    it('416', function () {
     assert.equal(httpStatus.requestedRangeNotSatisfiable, 416)
    })
    it('417', function () {
     assert.equal(httpStatus.expectationFailed, 417)
    })
    it('418', function () {
     assert.equal(httpStatus.imATeapot, 418)
    })
    it('419', function () {
     assert.equal(httpStatus.authenticationTimeout, 419)
    })
    it('420', function () {
     assert.equal(httpStatus.methodFailure, 420)
    })
    it('420', function () {
     assert.equal(httpStatus.enhanceYourCalm, 420)
    })
    it('422', function () {
     assert.equal(httpStatus.unprocessableEntity, 422)
    })
    it('423', function () {
     assert.equal(httpStatus.locked, 423)
    })
    it('424', function () {
     assert.equal(httpStatus.failedDependency, 424)
    })
    it('425', function () {
     assert.equal(httpStatus.unorderedCollection, 425)
    })
    it('426', function () {
     assert.equal(httpStatus.upgradeRequired, 426)
    })
    it('428', function () {
     assert.equal(httpStatus.preconditionRequired, 428)
    })
    it('429', function () {
     assert.equal(httpStatus.tooManyRequests, 429)
    })
    it('431', function () {
     assert.equal(httpStatus.requestHeaderFieldsTooLarge, 431)
    })
    it('440', function () {
     assert.equal(httpStatus.loginTimeout, 440)
    })
    it('444', function () {
     assert.equal(httpStatus.noResponse, 444)
    })
    it('449', function () {
     assert.equal(httpStatus.retryWith, 449)
    })
    it('450', function () {
     assert.equal(httpStatus.blockedByWindowsParentalControls, 450)
    })
    it('451', function () {
     assert.equal(httpStatus.unavailableForLegalReasons, 451)
    })
    it('494', function () {
     assert.equal(httpStatus.requestHeaderTooLarge, 494)
    })
    it('495', function () {
     assert.equal(httpStatus.certError, 495)
    })
    it('496', function () {
     assert.equal(httpStatus.noCert, 496)
    })
    it('497', function () {
     assert.equal(httpStatus.httpToHttps, 497)
    })
    it('499', function () {
     assert.equal(httpStatus.clientClosedRequest, 499)
    })
  })

  describe('Server Error', function() {
    it('500', function () {
     assert.equal(httpStatus.internalServerError, 500)
    })
    it('501', function () {
     assert.equal(httpStatus.notImplemented, 501)
    })
    it('502', function () {
     assert.equal(httpStatus.badGateway, 502)
    })
    it('503', function () {
     assert.equal(httpStatus.serviceUnavailable, 503)
    })
    it('504', function () {
     assert.equal(httpStatus.gatewayTimeout, 504)
    })
    it('505', function () {
     assert.equal(httpStatus.httpVersionNotSupported, 505)
    })
    it('506', function () {
     assert.equal(httpStatus.variantAlsoNegotiates, 506)
    })
    it('507', function () {
     assert.equal(httpStatus.insufficientStorage, 507)
    })
    it('508', function () {
     assert.equal(httpStatus.loopDetected, 508)
    })
    it('509', function () {
     assert.equal(httpStatus.bandwidthLimitExceeded, 509)
    })
    it('510', function () {
     assert.equal(httpStatus.notExtended, 510)
    })
    it('511', function () {
     assert.equal(httpStatus.networkAuthenticationRequired, 511)
    })
    it('520', function () {
     assert.equal(httpStatus.originError, 520)
    })
    it('521', function () {
     assert.equal(httpStatus.webServerIsDown, 521)
    })
    it('522', function () {
     assert.equal(httpStatus.connectionTimedOut, 522)
    })
    it('523', function () {
     assert.equal(httpStatus.proxyDeclinedRequest, 523)
    })
    it('524', function () {
     assert.equal(httpStatus.aTimeoutOccurred, 524)
    })
    it('598', function () {
     assert.equal(httpStatus.networkReadTimeoutError, 598)
    })
    it('599', function () {
     assert.equal(httpStatus.networkConnectTimeoutError, 599)
    })
  })
})
