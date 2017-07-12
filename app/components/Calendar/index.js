import {forEach} from 'lodash'

const breakpoint = 768

function buttonScreenReaderText () {
  if (!document.getElementById('eq-time-grid')) {
    return
  }

  let prevButton = document.querySelector('#eq-time-grid .fc-button-group .fc-prev-button')
  let nextButton = document.querySelector('#eq-time-grid .fc-button-group .fc-next-button')

  prevButton.innerHTML += `<span class="sr-only">Previous dates</span>`
  nextButton.innerHTML += `<span class="sr-only">Next dates</span>`
}

function setCalendarHeight (height) {
  if (window.innerWidth > 768) {
    return
  }

  forEach(document.querySelectorAll('.fc-body .fc-scroller-clip .fc-scroller'), (element) => {
    element.style.height = height
  })
}

function hideCapacity () {
  // Early return if the 'Capacity' column doesn't exist
  if (!document.querySelectorAll('.fc-resource-area.fc-widget-header .fc-content .fc-widget-header').length) {
    return
  }

  if (window.innerWidth > breakpoint) {
    // Hide the 'Capacity' filter on large screens
    document.querySelectorAll('#s-lc-eq-navform .form-inline .form-group')[2].remove()

    // Hide the 'Capacity' column on large screens
    document.querySelectorAll('.fc-resource-area.fc-widget-header .fc-content .fc-widget-header')[1].remove()
    document.querySelectorAll('.fc-resource-area.fc-widget-header .fc-content colgroup col')[1].remove()
    document.querySelectorAll('.fc-resource-area.fc-widget-header .fc-content colgroup col')[0].style.width = '35px'

    let rows = document.querySelectorAll('.fc-resource-area.fc-widget-content .fc-content tr')

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].children.length > 1) {
        rows[i].children[1].remove()
      }
    }

    document.querySelectorAll('.fc-resource-area.fc-widget-content .fc-content colgroup col')[1].remove()
    document.querySelectorAll('.fc-resource-area.fc-widget-content .fc-content colgroup col')[0].style.width = '35px'
  }
}

// Styles for 'Reservation details'
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

  element.className += ' pa4 bg-gray'
}

// Set all calendar styles
function setCalendarStyle () {
  // Early return if the calendar doesn't exist
  if (!document.querySelector('#time_grid_cont')) {
    return
  }

  // Styles for calendar header/toolbar
  document.querySelector('#time_grid_cont').removeAttribute('style')
  document.querySelector('#eq-time-grid .fc-header-toolbar').className += ' ph4 pv3'

  // Move the calendar title into the left column,
  let calendarHeader = document.querySelector('#eq-time-grid .fc-header-toolbar .fc-center h2')
  document.querySelector('#eq-time-grid .fc-header-toolbar .fc-left').appendChild(calendarHeader)
  calendarHeader.classList.add('pt2')

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
  setFilterBarStyles()
  buttonScreenReaderText()
  hideCapacity()
}

export {setCalendarHeight, setCalendarStyle}
