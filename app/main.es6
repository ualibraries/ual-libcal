import './styles/main.css'
import {debounce} from 'lodash'
import {hideCapacity} from './components/hide-capacity'
import {hideRoomInfo} from './components/hide-room-info'

document.addEventListener('DOMContentLoaded', () => {
  hideCapacity()
  hideRoomInfo()
})

window.addEventListener('resize', debounce(hideRoomInfo, 500))
