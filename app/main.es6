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

  // Adds padding to filter
  document.getElementById('s-lc-eq-navform').setAttribute('class', 'pa4')
})

// window.addEventListener('resize', debounce(hideRoomInfo, 500))
