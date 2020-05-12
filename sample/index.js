const { isWebMonetized } = require('../src/index')

isWebMonetized('https://testwebmonetization.com/demo.html').then(res => {
  console.log(res)
}).catch(e => console.log(e))
