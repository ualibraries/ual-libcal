import * as Handlebars from 'handlebars'

function insertAfter (newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
}

function showHeader () {
  const source = require('../templates/header.hbs')
  const template = Handlebars.compile(source)
  const widgetElement = document.querySelector('body > .container')
  const bodyElement = document.querySelector('body')

  let headerElement = document.createElement('header')

  headerElement.setAttribute('class', 'ual-header')
  headerElement.innerHTML = template()
  bodyElement.insertBefore(headerElement, widgetElement)
}

function showFooter () {
  const source = require('../templates/footer.hbs')
  const template = Handlebars.compile(source)
  const widgetElement = document.querySelector('body > .container')

  let footerElement = document.createElement('footer')

  footerElement.setAttribute('class', 'ual-footer')
  footerElement.innerHTML = template()
  insertAfter(footerElement, widgetElement)
}

export {showHeader, showFooter}
