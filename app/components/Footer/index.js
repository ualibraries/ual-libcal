import * as Handlebars from 'handlebars'
import './footer.css'

export function footer () {
  const source = require('./footer.hbs')
  const template = Handlebars.compile(source)
  const vendorFooter = document.getElementById('s-lc-public-footer')

  let footerElement = document.createElement('footer')

  footerElement.setAttribute('class', 'ual-footer')
  footerElement.innerHTML = template()

  vendorFooter.parentNode.insertBefore(footerElement, vendorFooter)
}
