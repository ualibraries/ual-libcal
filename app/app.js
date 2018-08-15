import './app.css'
import './lib/polyfill.js'
import {header} from './components/Header'
import {footer} from './components/Footer'
import {setCalendarStyle, setFilterBarStyles} from './components/Calendar'
import {setRoomInfoModalStyle} from './components/RoomInfo'
import {googleAnalytics, siteImproveAnalytics} from './components/Analytics'

document.addEventListener('DOMContentLoaded', () => {
  header()
  footer()
  setCalendarStyle()
  setFilterBarStyles()
  setRoomInfoModalStyle()
  googleAnalytics()
  siteImproveAnalytics()
})
