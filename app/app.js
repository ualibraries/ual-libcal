import './app.css'
import './lib/polyfill.js'
import {header} from './components/Header'
import {footer} from './components/Footer'
import {setCalendarStyle, setFilterBarStyles, setCalendarInfoTextStyles, hideCapacityFilter} from './components/Calendar'
import {setRoomInfoModalStyle} from './components/RoomInfo'
import {googleAnalytics, siteImproveAnalytics} from './components/Analytics'

document.addEventListener('DOMContentLoaded', () => {
  header()
  footer()
  setCalendarStyle()
  setFilterBarStyles()
  setCalendarInfoTextStyles()
  hideCapacityFilter()
  setRoomInfoModalStyle()
  googleAnalytics()
  siteImproveAnalytics()
})
