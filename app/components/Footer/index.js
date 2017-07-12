import * as Handlebars from 'handlebars'

function insertAfter (newNode, referenceNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
}

export function footer () {
  const source = require('./footer.hbs')
  const template = Handlebars.compile(source)
  const widgetElement = document.querySelector('body > .container')

  let footerElement = document.createElement('footer')

  footerElement.setAttribute('class', 'ual-footer')
  footerElement.innerHTML = template()
  insertAfter(footerElement, widgetElement)

  // Hide the tiny footer
  document.getElementById('s-lc-public-footer').remove()
}
