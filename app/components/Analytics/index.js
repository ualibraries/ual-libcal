/* eslint-disable */
import ga from 'raw-loader!./ga.js'
/* eslint-enable */

// Adds Google Analytics
export function googleAnalytics () {
  let script = document.createElement('script')
  script.innerHTML = ga
  document.body.appendChild(script)
}
