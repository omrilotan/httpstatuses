var assert = require('assert'),
    http_status = require('../')

describe('HTTP Status (snake_case)', function () {
  describe('Informational', function() {
    it('100', function () {
      assert.equal(http_status.continue, 100)
    })

    it('101', function () {
      assert.equal(http_status.switch_protocols, 101)
    })

    it('102', function () {
      assert.equal(http_status.processing, 102)
    })
  })

  describe('Success', function() {
    it('200', function () {
      assert.equal(http_status.ok, 200)
    })
    it('201', function () {
      assert.equal(http_status.created, 201)
    })
    it('202', function () {
      assert.equal(http_status.accepted, 202)
    })
    it('203', function () {
      assert.equal(http_status.non_authoritative, 203)
    })
    it('204', function () {
      assert.equal(http_status.no_content, 204)
    })
    it('205', function () {
      assert.equal(http_status.reset_content, 205)
    })
    it('206', function () {
      assert.equal(http_status.partial_content, 206)
    })
    it('207', function () {
      assert.equal(http_status.multi_status, 207)
    })
    it('208', function () {
      assert.equal(http_status.already_reported, 208)
    })
    it('226', function () {
      assert.equal(http_status.im_used, 226)
    })
  })

  describe('Redirection', function() {
    it('300', function () {
     assert.equal(http_status.multiple_choices, 300)
    })
    it('301', function () {
     assert.equal(http_status.moved_permanently, 301)
    })
    it('302', function () {
     assert.equal(http_status.found, 302)
    })
    it('303', function () {
     assert.equal(http_status.see_other, 303)
    })
    it('304', function () {
     assert.equal(http_status.not_modified, 304)
    })
    it('305', function () {
     assert.equal(http_status.use_proxy, 305)
    })
    it('306', function () {
     assert.equal(http_status.switch_proxy, 306)
    })
    it('307', function () {
     assert.equal(http_status.temporary_redirect, 307)
    })
    it('308', function () {
     assert.equal(http_status.permanent_redirect, 308)
    })
  })

  describe('Client Error', function() {
    it('400', function () {
     assert.equal(http_status.bad_request, 400)
    })
    it('401', function () {
     assert.equal(http_status.unauthorized, 401)
    })
    it('402', function () {
     assert.equal(http_status.payment_required, 402)
    })
    it('403', function () {
     assert.equal(http_status.forbidden, 403)
    })
    it('404', function () {
     assert.equal(http_status.not_found, 404)
    })
    it('405', function () {
     assert.equal(http_status.method_not_allowed, 405)
    })
    it('406', function () {
     assert.equal(http_status.not_acceptable, 406)
    })
    it('407', function () {
     assert.equal(http_status.proxy_authentication_required, 407)
    })
    it('408', function () {
     assert.equal(http_status.request_timeout, 408)
    })
    it('409', function () {
     assert.equal(http_status.conflict, 409)
    })
    it('410', function () {
     assert.equal(http_status.gone, 410)
    })
    it('411', function () {
     assert.equal(http_status.length_required, 411)
    })
    it('412', function () {
     assert.equal(http_status.precondition_failed, 412)
    })
    it('413', function () {
     assert.equal(http_status.request_entity_too_large, 413)
    })
    it('414', function () {
     assert.equal(http_status.request_uri_too_long, 414)
    })
    it('415', function () {
     assert.equal(http_status.unsupported_media_type, 415)
    })
    it('416', function () {
     assert.equal(http_status.requested_range_not_satisfiable, 416)
    })
    it('417', function () {
     assert.equal(http_status.expectation_failed, 417)
    })
    it('418', function () {
     assert.equal(http_status.im_a_teapot, 418)
    })
    it('419', function () {
     assert.equal(http_status.authentication_timeout, 419)
    })
    it('420', function () {
     assert.equal(http_status.method_failure, 420)
    })
    it('420', function () {
     assert.equal(http_status.enhance_your_calm, 420)
    })
    it('421', function () {
     assert.equal(http_status.misdirected_request, 421)
    })
    it('422', function () {
     assert.equal(http_status.unprocessable_entity, 422)
    })
    it('423', function () {
     assert.equal(http_status.locked, 423)
    })
    it('424', function () {
     assert.equal(http_status.failed_dependency, 424)
    })
    it('425', function () {
     assert.equal(http_status.unordered_collection, 425)
    })
    it('426', function () {
     assert.equal(http_status.upgrade_required, 426)
    })
    it('428', function () {
     assert.equal(http_status.precondition_required, 428)
    })
    it('429', function () {
     assert.equal(http_status.too_many_requests, 429)
    })
    it('431', function () {
     assert.equal(http_status.request_header_fields_too_large, 431)
    })
    it('440', function () {
     assert.equal(http_status.login_timeout, 440)
    })
    it('444', function () {
     assert.equal(http_status.no_response, 444)
    })
    it('449', function () {
     assert.equal(http_status.retry_with, 449)
    })
    it('450', function () {
     assert.equal(http_status.blocked_by_windows_parental_controls, 450)
    })
    it('451', function () {
     assert.equal(http_status.unavailable_for_legal_reasons, 451)
    })
    it('494', function () {
     assert.equal(http_status.request_header_too_large, 494)
    })
    it('495', function () {
     assert.equal(http_status.cert_error, 495)
    })
    it('496', function () {
     assert.equal(http_status.no_cert, 496)
    })
    it('497', function () {
     assert.equal(http_status.http_to_https, 497)
    })
    it('499', function () {
     assert.equal(http_status.client_closed_request, 499)
    })
  })

  describe('Server Error', function() {
    it('500', function () {
     assert.equal(http_status.internal_server_error, 500)
    })
    it('501', function () {
     assert.equal(http_status.not_implemented, 501)
    })
    it('502', function () {
     assert.equal(http_status.bad_gateway, 502)
    })
    it('503', function () {
     assert.equal(http_status.service_unavailable, 503)
    })
    it('504', function () {
     assert.equal(http_status.gateway_timeout, 504)
    })
    it('505', function () {
     assert.equal(http_status.http_version_not_supported, 505)
    })
    it('506', function () {
     assert.equal(http_status.variant_also_negotiates, 506)
    })
    it('507', function () {
     assert.equal(http_status.insufficient_storage, 507)
    })
    it('508', function () {
     assert.equal(http_status.loop_detected, 508)
    })
    it('509', function () {
     assert.equal(http_status.bandwidth_limit_exceeded, 509)
    })
    it('510', function () {
     assert.equal(http_status.not_extended, 510)
    })
    it('511', function () {
     assert.equal(http_status.network_authentication_required, 511)
    })
    it('520', function () {
     assert.equal(http_status.origin_error, 520)
    })
    it('521', function () {
     assert.equal(http_status.web_server_is_down, 521)
    })
    it('522', function () {
     assert.equal(http_status.connection_timed_out, 522)
    })
    it('523', function () {
     assert.equal(http_status.proxy_declined_request, 523)
    })
    it('524', function () {
     assert.equal(http_status.a_timeout_occurred, 524)
    })
    it('598', function () {
     assert.equal(http_status.network_read_timeout_error, 598)
    })
    it('599', function () {
     assert.equal(http_status.network_connect_timeout_error, 599)
    })
  })
})

