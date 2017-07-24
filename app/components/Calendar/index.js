import './calendar.css'
import {forEach} from 'lodash'

// Styles for 'Reservation details'
// (what you see after you click on an hour cell)
function setReservationDetailStyles () {
  let element = document.getElementById('s-lc-eq-bwell')

  if (!element) {
    return
  }

  element.classList.remove('well')
}

// Styles for filter bar
function setFilterBarStyles () {
  let element = document.getElementById('s-lc-eq-navform')

  if (!element) {
    return
  }

  // Add a gray background and padding
  element.className += ' pa4 bg-gray'
}

// Removes the 'Capacity' filter
function hideCapacityFilter () {
  let element = document.querySelectorAll('#s-lc-eq-navform .form-inline .form-group')[2]

  if (!element) {
    return
  }

  // ZAP!!!
  element.remove()
}

// Styles for info text above calendar
function setCalendarInfoTextStyles () {
  let element = document.getElementById('s-lc-group-description')

  if (!element) {
    return
  }

  element.classList.add('ph4')
}

// Set all calendar styles
function setCalendarStyle () {
  // Early return if the calendar doesn't exist
  if (!document.querySelector('#time_grid_cont')) {
    return
  }

  // Styles for calendar header/toolbar
  document.querySelector('#eq-time-grid .fc-header-toolbar').className += ' ph4 pv3'

  // Styles for calendar toolbar buttons
  document.querySelector('#eq-time-grid .fc-header-toolbar .fc-goToDate-button').className += ' white bg-blue btn'
  forEach(document.querySelectorAll('#eq-time-grid .fc-header-toolbar .fc-button-group button'), (element) => {
    element.className += ' white bg-blue btn'
  })

  // Add padding around calendar
  document.querySelector('#eq-time-grid .fc-view-container').classList.add('ph4')

  // Styles for calendar legend
  document.querySelector('#eq-time-grid-legend').classList.add('ph4')

  setReservationDetailStyles()
}

export {
  setFilterBarStyles,
  setCalendarInfoTextStyles,
  setCalendarStyle,
  hideCapacityFilter
}
