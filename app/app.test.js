/* global describe,it */
const expect = require('chai').expect
const config = require('../test/config.js')
const loadDocument = require('../test/loadDocument.js').loadDocument

describe('Customization script', function () {
  it('must load', function () {
    return loadDocument().then(
      function (dom) {
        let loadedCustomScriptURL = dom.window.document.querySelectorAll(
          'head script'
        )[4].src
        expect(loadedCustomScriptURL).to.be.equal(config.customScriptURL)
      },
      function (err) {
        console.error(err)
      }
    )
  })
})
