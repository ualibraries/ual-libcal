/* global Element */
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
import {makeNewReservationBtn} from './lib/make-new-reservation'

// Polyfill for IE11
if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this)
    }
  }
}

function addWebComponents () {
  let e = document.createElement('script')
  e.src = 'https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.0.1/webcomponents-lite.js'
  document.body.appendChild(e)
}

function addLibChat () {
  let e = document.createElement('script')
  e.src = '//v2.libanswers.com/load_chat.php?hash=07713bc057f66ebcdccd4dd1b4a2be3e'
  document.body.appendChild(e)
}

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
  makeNewReservationBtn()
  addLibChat()
  addWebComponents()
})

window.addEventListener('resize', debounce(() => {
  calendarClipHeight('250px')
}, 500))
