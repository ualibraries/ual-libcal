// Starts a static server on ./dist, exposes a world-accessible domain with localtunnel (https://localtunnel.github.io/www/)
var static = require('node-static')
var localtunnel = require('localtunnel')

var fileServer = new static.Server('./dist')

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response)
        console.log(request.url)
    }).resume()
}).listen(8000)

var tunnel = localtunnel(8000, function (err, tunnel) {
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
