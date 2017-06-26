function srTextNextPrevButtons () {
  if (!document.getElementById('eq-time-grid')) {
    return
  }

  let prevButton = document.querySelector('#eq-time-grid .fc-button-group .fc-prev-button')
  let nextButton = document.querySelector('#eq-time-grid .fc-button-group .fc-next-button')

  prevButton.innerHTML += `<span class="sr-only">Previous dates</span>`
  nextButton.innerHTML += `<span class="sr-only">Next dates</span>`
}

export function a11y () {
  srTextNextPrevButtons()
}
