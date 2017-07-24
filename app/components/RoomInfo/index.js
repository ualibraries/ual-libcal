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
}

// Styles for room info modal
function setRoomInfoModalStyle () {
  // Early return if browser doesn't support mutation observers
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

export {setRoomInfoModalStyle}
