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

  document.getElementById('s-lc-eq-navform').classList.add('pa4', 'bg-gray')

  document.querySelector('#eq-time-grid .fc-header-toolbar').classList.add('ph4')
  document.querySelector('#eq-time-grid .fc-view-container').classList.add('ph4')
  document.querySelector('#eq-time-grid-legend').classList.add('ph4')

  let calendarHeader = document.querySelector('#eq-time-grid .fc-header-toolbar .fc-center h2')
  document.querySelector('#eq-time-grid .fc-header-toolbar .fc-left').appendChild(calendarHeader)
})

// window.addEventListener('resize', debounce(hideRoomInfo, 500))
