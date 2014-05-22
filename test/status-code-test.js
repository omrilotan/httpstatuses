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
  })

  describe('Redirection', function() {
  })

  describe('Client Error', function() {
  })

  describe('Server Error', function() {
  })
})
