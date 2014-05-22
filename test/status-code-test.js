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
  })

  describe('Client Error', function() {
  })

  describe('Server Error', function() {
  })
})
