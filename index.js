exports.continue                         = exports.continue                             = 100
exports.switchProtocols                  = exports.switch_protocols                     = 101
exports.processing                       = exports.processing                           = 102

exports.ok                               = exports.ok                                   = 200
exports.created                          = exports.created                              = 201
exports.accepted                         = exports.accepted                             = 202
exports.nonAuthoritative                 = exports.non_authoritative                    = 203
exports.noContent                        = exports.no_content                           = 204
exports.resetContent                     = exports.reset_content                        = 205
exports.partialContent                   = exports.partial_content                      = 206
exports.multiStatus                      = exports.multi_status                         = 207
exports.alreadyReported                  = exports.already_reported                     = 208
exports.imUsed                           = exports.im_used                              = 226

exports.multipleChoices                  = exports.multiple_choices                     = 300
exports.movedPermanently                 = exports.moved_permanently                    = 301
exports.found                            = exports.found                                = 302
exports.seeOther                         = exports.see_other                            = 303
exports.notModified                      = exports.not_modified                         = 304
exports.useProxy                         = exports.use_proxy                            = 305
exports.switchProxy                      = exports.switch_proxy                         = 306
exports.temporaryRedirect                = exports.temporary_redirect                   = 307
exports.permanentRedirect                = exports.permanent_redirect                   = 308

exports.badRequest                       = exports.bad_request                          = 400
exports.unauthorized                     = exports.unauthorized                         = 401
exports.paymentRequired                  = exports.payment_required                     = 402
exports.forbidden                        = exports.forbidden                            = 403
exports.notFound                         = exports.not_found                            = 404
exports.methodNotAllowed                 = exports.method_not_allowed                   = 405
exports.notAcceptable                    = exports.not_acceptable                       = 406
exports.proxyAuthenticationRequired      = exports.proxy_authentication_required        = 407
exports.requestTimeout                   = exports.request_timeout                      = 408
exports.conflict                         = exports.conflict                             = 409
exports.gone                             = exports.gone                                 = 410
exports.lengthRequired                   = exports.length_required                      = 411
exports.preconditionFailed               = exports.precondition_failed                  = 412
exports.requestEntityTooLarge            = exports.request_entity_too_large             = 413
exports.requestUriTooLong                = exports.request_uri_too_long                 = 414
exports.unsupportedMediaType             = exports.unsupported_media_type               = 415
exports.requestedRangeNotSatisfiable     = exports.requested_range_not_satisfiable      = 416
exports.expectationFailed                = exports.expectation_failed                   = 417
exports.imATeapot                        = exports.im_a_teapot                          = 418
exports.authenticationTimeout            = exports.authentication_timeout               = 419
exports.methodFailure                    = exports.method_failure                       = 420
exports.enhanceYourCalm                  = exports.enhance_your_calm                    = 420
exports.unprocessableEntity              = exports.unprocessable_entity                 = 422
exports.locked                           = exports.locked                               = 423
exports.failedDependency                 = exports.failed_dependency                    = 424
exports.unorderedCollection              = exports.unordered_collection                 = 425
exports.upgradeRequired                  = exports.upgrade_required                     = 426
exports.preconditionRequired             = exports.precondition_required                = 428
exports.tooManyRequests                  = exports.too_many_requests                    = 429
exports.requestHeaderFieldsTooLarge      = exports.request_header_fields_too_large      = 431
exports.loginTimeout                     = exports.login_timeout                        = 440
exports.noResponse                       = exports.no_response                          = 444
exports.retryWith                        = exports.retry_with                           = 449
exports.blockedByWindowsParentalControls = exports.blocked_by_windows_parental_controls = 450
exports.unavailableForLegalReasons       = exports.unavailable_for_legal_reasons        = 451
exports.requestHeaderTooLarge            = exports.request_header_too_large             = 494
exports.certError                        = exports.cert_error                           = 495
exports.noCert                           = exports.no_cert                              = 496
exports.httpToHttps                      = exports.http_to_https                        = 497
exports.clientClosedRequest              = exports.client_closed_request                = 499

exports.internalServerError              = exports.internal_server_error                = 500
exports.notImplemented                   = exports.not_implemented                      = 501
exports.badGateway                       = exports.bad_gateway                          = 502
exports.serviceUnavailable               = exports.service_unavailable                  = 503
exports.gatewayTimeout                   = exports.gateway_timeout                      = 504
exports.httpVersionNotSupported          = exports.http_version_not_supported           = 505
exports.variantAlsoNegotiates            = exports.variant_also_negotiates              = 506
exports.insufficientStorage              = exports.insufficient_storage                 = 507
exports.loopDetected                     = exports.loop_detected                        = 508
exports.bandwidthLimitExceeded           = exports.bandwidth_limit_exceeded             = 509
exports.notExtended                      = exports.not_extended                         = 510
exports.networkAuthenticationRequired    = exports.network_authentication_required      = 511
exports.originError                      = exports.origin_error                         = 520
exports.webServerIsDown                  = exports.web_server_is_down                   = 521
exports.connectionTimedOut               = exports.connection_timed_out                 = 522
exports.proxyDeclinedRequest             = exports.proxy_declined_request               = 523
exports.aTimeoutOccurred                 = exports.a_timeout_occurred                   = 524
exports.networkReadTimeoutError          = exports.network_read_timeout_error           = 598
exports.networkConnectTimeoutError       = exports.network_connect_timeout_error        = 599

exports[100] = 'Continue'
exports[101] = 'Switch Protocols'
exports[102] = 'Processing'
exports[200] = 'OK'
exports[201] = 'Created'
exports[202] = 'Accepted'
exports[203] = 'Non-Authoritative Information'
exports[204] = 'No Content'
exports[205] = 'Reset Content'
exports[206] = 'Partial Content'
exports[207] = 'Multi-Status'
exports[208] = 'Already Reported'
exports[226] = 'IM Used'
exports[300] = 'Multiple Choices'
exports[301] = 'Moved Permanently'
exports[302] = 'Found'
exports[303] = 'Se Other'
exports[304] = 'Not Modified'
exports[305] = 'Use Proxy'
exports[306] = 'Switch Proxy'
exports[307] = 'Temporary Redirect'
exports[308] = 'Permanent Redirect'
exports[400] = 'Bad Request'
exports[401] = 'Unauthorized'
exports[402] = 'Payment Required'
exports[403] = 'Forbidden'
exports[404] = 'Not Found'
exports[405] = 'Method Not Allowed'
exports[406] = 'Not Acceptable'
exports[407] = 'Proxy Authentication Required'
exports[408] = 'Request Timeout'
exports[409] = 'Conflict'
exports[410] = 'Gone'
exports[411] = 'Length Required'
exports[412] = 'Precondition Failed'
exports[413] = 'Request Entity Too Large'
exports[414] = 'Request-URI Too Long'
exports[415] = 'Unsupported Media Type'
exports[416] = 'Requested Range Not Satisfiable'
exports[417] = 'Expectation Failed'
exports[418] = "I'm a teapot"
exports[419] = 'Authentication Timeout'
exports[422] = 'Unprocessable Entity'
exports[423] = 'Locked'
exports[424] = 'Failed Dependency'
exports[425] = 'Unordered Collection'
exports[426] = 'Upgrade Required'
exports[428] = 'Precondition Required'
exports[429] = 'Too Many Requests'
exports[431] = 'Request Header Fields Too Large'
exports[440] = 'Login Timeout'
exports[444] = 'No Response'
exports[449] = 'Retry With'
exports[450] = 'Blocked by Windows Parental Controls'
exports[451] = 'Unavailable for Legal Reasons'
exports[494] = 'Request Header Too Large'
exports[495] = 'Cert Error'
exports[496] = 'No Cert'
exports[497] = 'HTTP to HTTPS'
exports[499] = 'Client Closed Request'
exports[500] = 'Internal Server Error'
exports[501] = 'Not Implemented'
exports[502] = 'Bad Gateway'
exports[503] = 'Service Unavailable'
exports[504] = 'Gateway Timeout'
exports[505] = 'HTTP Version Not Supported'
exports[506] = 'Variant Also Negotiates'
exports[507] = 'Insufficient Storate'
exports[508] = 'Loop Detected'
exports[509] = 'Bandwidth Limit Exceeded'
exports[510] = 'Not Extended'
exports[511] = 'Network Authentication Required'
exports[520] = 'Origin Error'
exports[521] = 'Web Server is Down'
exports[522] = 'Connection Timed Out'
exports[523] = 'Proxy Declined Request'
exports[524] = 'A Timeout Occurred'
exports[598] = 'Network Read Timeout Error'
exports[599] = 'Network Connect Timeout Error'

