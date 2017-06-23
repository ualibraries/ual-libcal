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
  modal.style.width = ''
  modal.classList.add('mw5')
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
