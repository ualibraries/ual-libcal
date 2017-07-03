const user = require('os').userInfo().username

module.exports = function (shipit) {
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      workspace: '/tmp/ual-libcal',
      deployTo: '/data1/mainsite/vendor-support/libcal',
      repositoryUrl: 'https://github.com/ualibraries/ual-libcal.git',
      ignores: ['.git', 'node_modules'],
      rsync: ['--del'],
      keepReleases: 8,
      // key: '/path/to/key',
      shallowClone: true
    },
    dev: {
      branch: 'develop',
      servers: `${user}@www.library.arizona.edu`
    },
    prod: {
      servers: `${user}@www.library.arizona.edu`
    }
  })
}
