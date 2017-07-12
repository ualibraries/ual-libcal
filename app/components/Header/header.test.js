/* global describe,it */
const expect = require('chai').expect
const loadDocument = require('../../../test/loadDocument.js').loadDocument

describe('Header', function () {
  it('must load', function () {
    return loadDocument().then(
      function (dom) {
        expect(dom.window.document.querySelectorAll('header.ual-header').length).to.equal(1)
      },
      function (err) {
        console.error(err)
      }
    )
  })
})
