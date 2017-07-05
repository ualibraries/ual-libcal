const test = require('ava')
const jsdom = require('jsdom')
const {JSDOM} = jsdom

let dom
let jsdomConfig = {
  resources: 'usable',
  runScripts: 'dangerously'
}

test.before(async t => {
  dom = JSDOM.fromURL('http://arizona.beta.libcal.com/spaces', jsdomConfig).then(dom => {
    return dom.window.document.documentElement
  })
})

// Ensure our customization script gets loaded
test('Check script', async t => {
  let source = await dom
  let headScripts = source.querySelectorAll('head script')
  let loaded = false

  for (let i = 0; i < headScripts.length; i++) {
    let script = headScripts[i].src

    if (script === 'http://www.library.arizona.edu/vendor-support/libcal/current/dist/bundle.js') {
      loaded = true
      break
    }
  }

  if (loaded) {
    t.pass(`The script was loaded`)
  } else {
    t.fail(`Oh no! The script was not loaded`)
  }
})
