export function hideRoomInfo () {
  if (window.innerWidth < 450) {
    // hide header cells
    document.querySelectorAll('.fc-resource-area.fc-widget-header .fc-content .fc-widget-header')[0].classList.add('hidden')
    document.querySelectorAll('.fc-resource-area.fc-widget-header .fc-content colgroup col')[0].style.width = 'auto'

    // hide body cells
    let rows = document.querySelectorAll('.fc-resource-area.fc-widget-content .fc-content tr')

    for (let i = 0; i < rows.length; i++) {
      rows[i].children[0].classList.add('hidden')
    }

    document.querySelectorAll('.fc-resource-area.fc-widget-content .fc-content colgroup col')[0].style.width = 'auto'
  } else {
    // show header cells
    document.querySelectorAll('.fc-resource-area.fc-widget-header .fc-content .fc-widget-header')[0].classList.remove('hidden')
    document.querySelectorAll('.fc-resource-area.fc-widget-header .fc-content colgroup col')[0].style.width = '12%'

    // show body cells
    let rows = document.querySelectorAll('.fc-resource-area.fc-widget-content .fc-content tr')

    for (let i = 0; i < rows.length; i++) {
      rows[i].children[0].classList.remove('hidden')
    }

    document.querySelectorAll('.fc-resource-area.fc-widget-content .fc-content colgroup col')[0].style.width = '12%'
  }
}
