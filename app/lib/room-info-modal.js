/* global MutationObserver */

// Sets width of 'Room info' dialog modals
function setWidth (nodes) {
  if (!nodes.length) {
    return
  }

  if (!nodes[0].classList.contains('modal')) {
    return
  }

  let modal = nodes[0].children[0]

  if (window.innerWidth < 700) {
    modal.style.width = '80%'
    modal.style.marginLeft = 'auto'
    modal.style.marginRight = 'auto'
  }
}

export function roomInfoModal () {
  let target = document.querySelector('body')

  let observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        setWidth(mutation.addedNodes)
      }
    })
  })

  let config = {
    attributes: true,
    childList: true,
    characterData: true
  }

  observer.observe(target, config)
}

// Changes styles of room info buttons
export function roomInfoButtonStyle () {
  let elements = document.querySelectorAll('.fc-resource-area.fc-widget-content .fc-content tr')

  elements.forEach((element) => {
    if (element.childNodes[0].classList.contains('fc-widget-content')) {
      let infoLink = element.childNodes[0].querySelectorAll('.fc-cell-content a')[0]
      let icon = element.childNodes[0].querySelectorAll('.fc-cell-content i.fa')[0]

      // Hide fa icon
      icon.style.display = 'none'

      // Add info bubble
      infoLink.innerHTML += `<span class="info-bubble">Info</span>`

      // Hide empty cell text
      element.childNodes[0].querySelectorAll('.fc-cell-content .fc-cell-text')[0].style.display = 'none'

      // Center align cell content
      element.childNodes[0].querySelectorAll('.fc-cell-content')[0].style.textAlign = 'center'
    }
  })
}
