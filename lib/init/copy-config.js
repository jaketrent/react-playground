import * as fs from 'fs'
import * as path from 'path'

var src = './node_modules/react-playground/node_modules/react-config/webpack.config.js'
var dest = './webpack.config.js'

export default function () {
  var read = fs.createReadStream(path.resolve(src))
  var write = fs.createWriteStream(path.resolve(dest))

  read.pipe(write)
}