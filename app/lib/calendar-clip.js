export function calendarClipHeight (height) {
  if (window.innerWidth > 700) {
    return
  }

  document.querySelectorAll('.fc-body .fc-scroller-clip .fc-scroller')
    .forEach((element) => {
      element.style.height = height
    })
}
