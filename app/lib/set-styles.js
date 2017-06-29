import {forEach} from 'lodash'

function calendarStyles () {
  if (!document.querySelector('#time_grid_cont')) {
    return
  }

  // Styles for calendar header/toolbar
  document.querySelector('#time_grid_cont').removeAttribute('style')
  document.querySelector('#eq-time-grid .fc-header-toolbar').classList.add('ph4', 'pv3')
  // Move the calendar title into the left column,
  let calendarHeader = document.querySelector('#eq-time-grid .fc-header-toolbar .fc-center h2')
  document.querySelector('#eq-time-grid .fc-header-toolbar .fc-left').appendChild(calendarHeader)
  calendarHeader.classList.add('pt2')

  // Styles for calendar toolbar buttons
  document.querySelector('#eq-time-grid .fc-header-toolbar .fc-goToDate-button')
    .classList.add('white', 'bg-blue', 'bn')

  forEach(document.querySelectorAll('#eq-time-grid .fc-header-toolbar .fc-button-group button'), (element) => {
    element.classList.add('white', 'bg-blue', 'bn')
  })

  // Styles for calendar
  document.querySelector('#eq-time-grid .fc-view-container').classList.add('ph4')

  // Styles for calendar legend
  document.querySelector('#eq-time-grid-legend').classList.add('ph4')
}

function reservationDetailStyles () {
  let element = document.getElementById('s-lc-eq-bwell')
  if (!element) {
    return
  }

  // Styles for 'Reservation details'
  element.classList.remove('well')
}

function filterBarStyles () {
  let element = document.getElementById('s-lc-eq-navform')
  // Styles for filter bar
  if (!element) {
    return
  }

  element.classList.add('pa4', 'bg-gray')
}

function bookingPageTitleStyles () {
  // Styles for the booking confirmation page title
  let element = document.getElementById('s-lc-public-nick-h1')

  if (!element) {
    return
  }

  element.classList.add('pa2')
}

function cancelBookingTitleStyles () {
  if (!document.getElementById('cancel_eqb_php')) {
    return
  }

  document.querySelector('body > .container > h1').classList.add('ml2')
}

// Room reservations table styles
function roomReservationsTableStyles () {
  let element = document.getElementById('s-lc-space-nick-tb')

  if (!element) {
    return
  }

  element.style.width = '100%'
}

// Sets miscelaneous styles
export function setMiscStyles () {
  filterBarStyles()
  calendarStyles()
  reservationDetailStyles()
  bookingPageTitleStyles()
  cancelBookingTitleStyles()
  roomReservationsTableStyles()
}
