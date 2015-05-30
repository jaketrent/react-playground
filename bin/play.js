#!/usr/bin/env node

require('babel/register')({ stage: 0 })
var argv = require('minimist')(process.argv.slice(2))

function hasArgs(args) {
  return Object.keys(argv).length > 1
}

if (!hasArgs(argv) || argv.help || argv.h) {
  require('../lib/help')()
  return
}

if (argv.init || argv.i)
  require('../lib/init')()