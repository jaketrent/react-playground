import copyConfig from './copy-config'
import copyIndex from './copy-index'
import writePackage from './write-package'

export default function () {
  try {
    copyConfig()
  } catch (e) {
    console.log('Error copying webpack config', e)
    process.exit(1)
  }

  try {
    copyIndex()
  } catch (e) {
    console.log('Error writing dependencies', e)
    process.exit(1)
  }

  try {
    writePackage()
  } catch (e) {
    console.log('Error modifying package.json', e)
    process.exit(1)
  }
}