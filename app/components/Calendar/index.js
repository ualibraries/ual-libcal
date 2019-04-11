import './calendar.css'
import { forEach } from 'lodash'

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

// Set all calendar styles
function setCalendarStyle () {
  if (document.querySelector('#time_grid_cont')) {
    // Styles for calendar legend
    document.querySelector('.s-lc-time-grid-legend').classList.add('ph4')
  }

  if (document.querySelector('#eq-time-grid .fc-header-toolbar')) {
    // Styles for calendar header/toolbar
    document.querySelector('#eq-time-grid .fc-header-toolbar').className +=
      ' ph4 pv3'

    // Styles for calendar toolbar buttons
    document.querySelector(
      '#eq-time-grid .fc-header-toolbar .fc-goToDate-button'
    ).className +=
      ' white bg-blue btn'
    forEach(
      document.querySelectorAll(
        '#eq-time-grid .fc-header-toolbar .fc-button-group button'
      ),
      element => {
        element.className += ' white bg-blue btn'
      }
    )
  }

  setReservationDetailStyles()
}

export {
  setFilterBarStyles,
  setCalendarStyle
}
