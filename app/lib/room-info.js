/* global MutationObserver */

import {forEach} from 'lodash'

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

  // Change the modal grid layout from 4/8 to 5/7
  setTimeout(() => {
    // this is weird
    let leftColumn = modal.querySelector('.col-md-4')
    leftColumn.classList.remove('col-md-4')
    leftColumn.classList.add('col-md-5')

    let rightColumn = modal.querySelector('.col-md-8')
    rightColumn.classList.remove('col-md-8')
    rightColumn.classList.add('col-md-7')
  }, 1000)
}

function roomInfoModal () {
  if (!window.MutationObserver) {
    return
  }

  let target = document.querySelector('body')

  let observer = new MutationObserver((mutations) => {
    forEach(mutations, (mutation) => {
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
function roomInfoButtonStyle () {
  if (!window.MutationObserver) {
    return
  }

  // For the main calendar page
  if (document.getElementById('eq-time-grid')) {
    let elements = document.querySelectorAll('.fc-resource-area.fc-widget-content .fc-content tr')

    forEach(elements, (element) => {
      if (element.childNodes[0].classList.contains('fc-widget-content')) {
        let infoLink = element.childNodes[0].querySelectorAll('.fc-cell-content a')[0]
        let icon = element.childNodes[0].querySelectorAll('.fc-cell-content i.fa')[0]

        // Hide fa icon
        if (icon) {
          icon.style.display = 'none'
        }

        // Add info bubble
        if (infoLink) {
          infoLink.innerHTML += `<span class="info-bubble">Info</span>`
        }

        // Hide empty cell text
        element.childNodes[0].querySelectorAll('.fc-cell-content .fc-cell-text')[0].style.display = 'none'

        // Center align cell content
        element.childNodes[0].querySelectorAll('.fc-cell-content')[0].style.textAlign = 'center'
      }
    })
  }

  // For 'View all room reservations' page
  if (document.getElementById('equip_nick')) {
    let config = {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true
    }

    // OK, here we go...
    let target = document.getElementById('s-lc-space-nick-tb')
    let observer = new MutationObserver((mutations) => {
      forEach(mutations, (mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          forEach(mutation.addedNodes, (element) => {
            if (element.nodeType === 1 && element.querySelector('i.fa')) {
              let infoLink = element.children[3].querySelector('a')
              let icon = element.children[3].querySelector('i.fa')

              // Hide fa icon
              if (icon) {
                icon.style.display = 'none'
              }

              // Add info bubble
              if (infoLink) {
                infoLink.innerHTML += `<span class="info-bubble">Info</span>`
              }

              // Center align cell content
              element.children[3].style.textAlign = 'center'
            }
          })
        }
      })
    })
    // ...Phew! - wipes sweat from brow -

    observer.observe(target, config)
  }
}

export {roomInfoModal, roomInfoButtonStyle}
