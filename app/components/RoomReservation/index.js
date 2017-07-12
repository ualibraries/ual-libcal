// Adds a 'Back' button to the 'Search for a room reservaiton' page
function backBtn () {
  if (!document.getElementById('equip_nick')) {
    return
  }

  let parentNode = document.querySelector('body > .container')
  let backButton = document.createElement('button')
  let backButtonText = document.createTextNode('Back')
  backButton.appendChild(backButtonText)
  backButton.classList.add('btn', 'btn-default', 'ml3', 'mt3')
  backButton.className += ' btn btn-default ml3 mt3'
  backButton.setAttribute('onclick', 'window.history.back()')
  parentNode.insertBefore(backButton, document.getElementById('s-lc-public-nick-h1'))
}

// Adds a 'Make new reservation' button to the 'Room reservation' page
function makeNewReservationBtn () {
  if (!document.getElementById('cancel_eqb_php')) {
    return true
  }

  let container = document.querySelector('body > .container')
  let reservationButton = `<div class="tc mh2 mb4"><a href="${window.location.protocol}//${window.location.hostname}/spaces" class="btn btn-default">Make a new reservation</a></div>`

  if (!document.getElementById('btn-cancel')) {
    buttonHtml()
  }

  if (document.getElementById('btn-cancel')) {
    document.getElementById('btn-cancel').addEventListener('click', () => {
      buttonHtml()
    })
  }
}

// 'Cancel booking' title styles
function setCancelBookingTitleStyles () {
  if (!document.getElementById('cancel_eqb_php')) {
    return
  }

  document.querySelector('body > .container > h1').classList.add('ml2')
}

// Room reservations table styles
function setRoomReservationsTableStyles () {
  let element = document.getElementById('s-lc-space-nick-tb')

  if (!element) {
    return
  }

  // Make the table full width
  element.style.width = '100%'
}

export function setRoomReservationStyle () {
  backBtn()
  makeNewReservationBtn()
  setCancelBookingTitleStyles()
  setRoomReservationsTableStyles()
}
