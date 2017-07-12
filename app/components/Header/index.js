import * as Handlebars from 'handlebars'

// Load LibChat script
function addLibChatScript () {
  let e = document.createElement('script')
  e.src = '//v2.libanswers.com/load_chat.php?hash=07713bc057f66ebcdccd4dd1b4a2be3e'
  document.body.appendChild(e)
}

// Removes breadcrumbs
function hideBreadcrumbs () {
  document.getElementById('s-lc-public-bc').remove()
}

// Adds header
export function header () {
  const source = require('./header.hbs')
  const template = Handlebars.compile(source)
  const widgetElement = document.querySelector('body > .container')
  const bodyElement = document.querySelector('body')

  let headerElement = document.createElement('header')

  headerElement.setAttribute('class', 'ual-header')
  headerElement.innerHTML = template()
  bodyElement.insertBefore(headerElement, widgetElement)

  addLibChatScript()
  hideBreadcrumbs()
}
