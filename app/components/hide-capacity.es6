// Hides the 'Capacity column'
export function hideCapacity () {

  document.querySelectorAll('.fc-resource-area.fc-widget-header .fc-content .fc-widget-header')[1].remove()

  document.querySelectorAll('.fc-resource-area.fc-widget-header .fc-content colgroup col')[1].remove()

  let rows = document.querySelectorAll('.fc-resource-area.fc-widget-content .fc-content tr')

  for (let i = 0; i < rows.length; i++) {
    rows[i].children[1].remove()
  }

  document.querySelectorAll('.fc-resource-area.fc-widget-content .fc-content colgroup col')[1].remove()
}
