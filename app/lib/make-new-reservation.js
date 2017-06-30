function buttonHtml () {
  let container = document.querySelector('body > .container')
  let reservationButton = `<a href="${window.location.protocol}//${window.location.hostname}/spaces" class="btn btn-default">Make a new reservation</a>`
  container.innerHTML += `<div class="tc mh2 mb4">${reservationButton}</div>`
}

export function makeNewReservationBtn () {
  if (!document.getElementById('cancel_eqb_php')) {
    return true
  }

  if (!document.getElementById('btn-cancel')) {
    buttonHtml()
  }

  document.getElementById('btn-cancel').addEventListener('click', () => {
    buttonHtml()
  })
}
