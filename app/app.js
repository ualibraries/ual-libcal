/* global Element */
import './styles/main.css'
import './lib/polyfill.js'
import {debounce} from 'lodash'
import {header} from './components/Header'
import {footer} from './components/Footer'
import {setCalendarStyle, setCalendarHeight} from './components/Calendar'
import {setRoomInfoModalStyle, setRoomInfoButtonStyle} from './components/RoomInfo'
import {setRoomReservationStyle} from './components/RoomReservation'

document.addEventListener('DOMContentLoaded', () => {
  header()
  footer()
  setCalendarHeight('250px')
  setCalendarStyle()
  setRoomInfoModalStyle()
  setRoomInfoButtonStyle()
  setRoomReservationStyle()
})

window.addEventListener('resize', debounce(() => {
  setCalendarHeight('250px')
}, 500))
