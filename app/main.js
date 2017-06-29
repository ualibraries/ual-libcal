import './styles/main.css'
import {debounce} from 'lodash'
import {hideCapacity} from './lib/hide-capacity'
import {hideBreadcrumbs} from './lib/hide-breadcrumbs'
import {calendarClipHeight} from './lib/calendar-clip'
import {roomInfoModal, roomInfoButtonStyle} from './lib/room-info'
import {showHeader, showFooter, hideTinyFooter} from './lib/template'
import {setMiscStyles} from './lib/set-styles'
import {bookingConfirmationBackButton} from './lib/booking-confirmation-back-button'
import {a11y} from './lib/a11y'

document.addEventListener('DOMContentLoaded', () => {
  hideCapacity()
  showHeader()
  showFooter()
  hideBreadcrumbs()
  hideTinyFooter()
  calendarClipHeight('250px')
  roomInfoModal()
  roomInfoButtonStyle()
  setMiscStyles()
  bookingConfirmationBackButton()
  a11y()
})

window.addEventListener('resize', debounce(() => {
  calendarClipHeight('250px')
}, 500))
