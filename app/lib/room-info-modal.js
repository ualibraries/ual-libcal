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
