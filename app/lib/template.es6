import * as Handlebars from 'handlebars'

function insertAfter (newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function showHeader () {
  const source = require('../templates/header.hbs')
  const template = Handlebars.compile(source)
  const widgetElement = document.querySelector('body > .container')
  const bodyElement = document.querySelector('body')

  let headerElement = document.createElement('header')

  headerElement.innerHTML = template({widget: 'this is a test'})
  bodyElement.insertBefore(headerElement, widgetElement)
}

function showFooter () {
  const source = require('../templates/footer.hbs')
  const template = Handlebars.compile(source)
  const widgetElement = document.querySelector('body > .container')
  const bodyElement = document.querySelector('body')

  let footerElement = document.createElement('footer')

  footerElement.innerHTML = template()
  insertAfter(footerElement, widgetElement)
}

export {showHeader, showFooter}
