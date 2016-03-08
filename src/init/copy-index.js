import * as fs from 'fs'
import * as path from 'path'

var src = './node_modules/react-config/index.js'
var dest = './index.js'

export default function () {
  var read = fs.createReadStream(path.resolve(src))
  var write = fs.createWriteStream(path.resolve(dest))

  read.pipe(write)
}
