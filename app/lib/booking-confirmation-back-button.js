// Adds a 'Back' button to the 'Search for a room reservaiton' page
export function bookingConfirmationBackButton () {
  if (!document.getElementById('equip_nick')) {
    return
  }

  let parentNode = document.querySelector('body > .container')
  let backButton = document.createElement('button')
  let backButtonText = document.createTextNode('Back')
backButton.appendChild(backButtonText)
  backButton.classList.add('btn', 'btn-default', 'ml3', 'mt3')
  backButton.setAttribute('onclick', 'window.history.back()')
  parentNode.insertBefore(backButton, document.getElementById('s-lc-public-nick-h1'))
}
