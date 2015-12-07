import clone from 'lodash/lang/clone'
import * as fs from 'fs'
import * as path from 'path'

var src = './node_modules/react-playground/node_modules/react-config/package.json'
var dest = './package.json'

function copyDevDependencies(srcPkg, destPkg) {
  var from = clone(srcPkg)
  var to = clone(destPkg)
  to.devDependencies = ({}, to.devDependencies, from.devDependencies)
  return to
}

function copyScripts(srcPkg, destPkg) {
  var from = clone(srcPkg)
  var to = clone(destPkg)
  to.scripts = ({}, to.scripts, from.scripts)
  return to
}

function writeFile(pkg, done) {
  fs.writeFile(path.resolve(dest), JSON.stringify(pkg, null, 2), { encoding: 'utf8' }, done)
}

function readFile(absPath) {
  var file = fs.readFileSync(absPath, { encoding: 'utf8' })
  return JSON.parse(file)
}

export default function () {
  var srcPkg = readFile(path.resolve(src))
  var destPkg = readFile(path.resolve(dest))
  var newPkg = copyDevDependencies(srcPkg, destPkg)
  newPkg = copyScripts(srcPkg, newPkg)
  writeFile(newPkg)
}
