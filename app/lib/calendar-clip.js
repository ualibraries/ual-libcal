import {forEach} from 'lodash'

export function calendarClipHeight (height) {
  if (window.innerWidth > 700) {
    return
  }

  forEach(document.querySelectorAll('.fc-body .fc-scroller-clip .fc-scroller'), (element) => {
    element.style.height = height
  })
}
