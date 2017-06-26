export function hideCapacity () {
  // Early return if the 'Capacity' column doesn't exist
  if (!document.querySelectorAll('.fc-resource-area.fc-widget-header .fc-content .fc-widget-header').length) {
    return
  }

  // Hide the 'Capacity' column
  document.querySelectorAll('.fc-resource-area.fc-widget-header .fc-content .fc-widget-header')[1].remove()

  document.querySelectorAll('.fc-resource-area.fc-widget-header .fc-content colgroup col')[1].remove()

  let rows = document.querySelectorAll('.fc-resource-area.fc-widget-content .fc-content tr')

  for (let i = 0; i < rows.length; i++) {
    if (rows[i].children.length > 1) {
      rows[i].children[1].remove()
    }
  }

  document.querySelectorAll('.fc-resource-area.fc-widget-content .fc-content colgroup col')[1].remove()

  // Hide the 'Capacity' filter
  document.querySelectorAll('#s-lc-eq-navform .form-inline .form-group')[2].remove()
}
