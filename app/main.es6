import css from './styles/main.css'
import {debounce} from 'lodash'
import {hideCapacity} from './lib/hide-capacity'
import {hideRoomInfo} from './lib/hide-room-info'
import {showHeader, showFooter} from './lib/template'

document.addEventListener('DOMContentLoaded', () => {
  // hideCapacity()
  // hideRoomInfo()

  showHeader()
  showFooter()
})

// window.addEventListener('resize', debounce(hideRoomInfo, 500))
