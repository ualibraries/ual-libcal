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
  document.querySelectorAll('#eq-time-grid .fc-header-toolbar .fc-button-group button')
    .forEach((element) => {
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

// Sets miscelaneous styles
export function setMiscStyles () {
  filterBarStyles()
  calendarStyles()
  reservationDetailStyles()
  bookingPageTitleStyles()
}
