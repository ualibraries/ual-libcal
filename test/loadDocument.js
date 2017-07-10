const rp = require('request-promise-native')
const jsdom = require('jsdom')
const {JSDOM} = jsdom
const config = require('./config.js')

function loadDocument () {
  return new Promise((resolve, reject) => {
    rp(config.testURL).then((body) => {
      const options = {
        url: config.testURL,
        resources: 'usable',
        runScripts: 'dangerously'
      }

      let dom = new JSDOM(body, options)

      dom.window.document.addEventListener('DOMContentLoaded', () => {
        setImmediate(() => {
          resolve(dom)
        })
      })
    })
  })
}

module.exports = {
  loadDocument: loadDocument
}
