/* eslint-disable */
import ga from 'raw-loader!./ga.js'
/* eslint-enable */

// Adds Google Analytics
function googleAnalytics () {
  let script = document.createElement('script')
  script.innerHTML = ga
  document.body.appendChild(script)
}

// Adds Siteimprove analytics
function siteImproveAnalytics () {
  let script = document.createElement('script')
  script.async = true
  script.src = '//us1.siteimprove.com/js/siteanalyze_20850.js'
  document.body.appendChild(script)
}

export {googleAnalytics, siteImproveAnalytics}
