#!/usr/bin/env node

require('babel/register')({ stage: 0 })
var argv = require('minimist')(process.argv.slice(2))

function hasArgs(args) {
  return Object.keys(args).length > 1
}

if (!hasArgs(argv) || argv.help || argv.h) {
  require('../help')()
  process.exit(0)
}

if (argv.init || argv.i)
  require('../init')()