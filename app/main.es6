import css from './styles/main.css'
import {debounce} from 'lodash'
import {hideCapacity} from './lib/hide-capacity'
import {hideRoomInfo} from './lib/hide-room-info'
import {hideBreadcrumbs} from './lib/hide-breadcrumbs'
import {showHeader, showFooter} from './lib/template'

document.addEventListener('DOMContentLoaded', () => {
  // hideCapacity()
  // hideRoomInfo()

  showHeader()
  showFooter()
  hideBreadcrumbs()

  // Adds padding to filter
  document.getElementById('s-lc-eq-navform').setAttribute('class', 'pa4')
})

// window.addEventListener('resize', debounce(hideRoomInfo, 500))
