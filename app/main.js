import './styles/main.css'
import {debounce} from 'lodash'
import {hideCapacity} from './lib/hide-capacity'
import {hideBreadcrumbs} from './lib/hide-breadcrumbs'
import {hideTinyFooter} from './lib/hide-tiny-footer'
import {calendarClipHeight} from './lib/calendar-clip'
import {roomInfoModal} from './lib/room-info-modal'
import {showHeader, showFooter} from './lib/template'
import {setMiscStyles} from './lib/set-styles'
import {bookingConfirmationBackButton} from './lib/booking-confirmation-back-button'

document.addEventListener('DOMContentLoaded', () => {
  hideCapacity()
  showHeader()
  showFooter()
  hideBreadcrumbs()
  hideTinyFooter()
  calendarClipHeight('250px')
  roomInfoModal()
  setMiscStyles()
  bookingConfirmationBackButton()
})

window.addEventListener('resize', debounce(() => {
  calendarClipHeight('250px')
}, 500))
