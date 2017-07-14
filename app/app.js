import './app.css'
import './lib/polyfill.js'
// import {debounce} from 'lodash'
import {header} from './components/Header'
import {footer} from './components/Footer'
// import {setCalendarStyle, setCalendarHeight, hideCapacity, setFilterBarStyles} from './components/Calendar'
import {hideCapacity, setFilterBarStyles, setCalendarInfoTextStyles} from './components/Calendar'
// import {setRoomInfoModalStyle, setRoomInfoButtonStyle} from './components/RoomInfo'
// import {setRoomReservationStyle} from './components/RoomReservation'

document.addEventListener('DOMContentLoaded', () => {
  header()
  footer()
  // setCalendarHeight('250px')
  // setCalendarStyle()
  hideCapacity()
  setFilterBarStyles()
  setCalendarInfoTextStyles()
  // setRoomInfoModalStyle()
  // setRoomInfoButtonStyle()
  // setRoomReservationStyle()
})

// window.addEventListener('resize', debounce(() => {
//   setCalendarHeight('250px')
// }, 500))
