#!/usr/bin/env node
const { isWebMonetized } = require('./index')

if (process.argv.length <= 2) throw new Error('No URL Specified')
isWebMonetized(process.argv[2]).then(res => console.log(res)).catch(e => console.log(e))
