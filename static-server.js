// Starts a static server on ./build, exposes a world-accessible domain with localtunnel (https://localtunnel.github.io/www/)
const server = require('node-static')
const localtunnel = require('localtunnel')
const moment = require('moment')
const fileServer = new server.Server('./build')

require('http').createServer(function (request, response) {
  request.addListener('end', function () {
    let time = moment().format()
    fileServer.serve(request, response)
    console.log(`${time} ${request.headers['x-real-ip']} ${request.url}`)
  }).resume()
}).listen(8000)

const tunnel = localtunnel(8000, function (err, tunnel) {
  if (err) {
    console.error(err)
  }

  console.log(`Static server running at ${tunnel.url}\n`)
  console.log(`Go to this url: http://arizona.beta.libcal.com/admin_look.php?action=0`)
  console.log(`Paste script into LibCal > Admin > Look & Feel > Code Customizations`)
  console.log(`<script type="text/javascript" src="${tunnel.url}/bundle.js"></script>\n`)
})

tunnel.on('close', () => {
  // tunnels are closed
})
