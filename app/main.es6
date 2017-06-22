import css from './styles/main.css'
import {debounce} from 'lodash'
import {hideCapacity} from './lib/hide-capacity'
import {hideRoomInfo} from './lib/hide-room-info'
import {hideBreadcrumbs} from './lib/hide-breadcrumbs'
import {hideTinyFooter} from './lib/hide-tiny-footer'
import {showHeader, showFooter} from './lib/template'

document.addEventListener('DOMContentLoaded', () => {
  hideCapacity()
  // hideRoomInfo()

  showHeader()
  showFooter()
  hideBreadcrumbs()
  hideTinyFooter()

  // Styles for filter bar
  document.getElementById('s-lc-eq-navform').classList.add('pa4', 'bg-gray')

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

  // Styles for 'Reservation details'
  document.getElementById('s-lc-eq-bwell').classList.remove('well')
})

// window.addEventListener('resize', debounce(hideRoomInfo, 500))
