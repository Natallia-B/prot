exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['pi-spec.js'],
    multiCapabilities: [/*{
      browserName: 'firefox'
    }, */{
      browserName: 'chrome'
    }]
  }
  
