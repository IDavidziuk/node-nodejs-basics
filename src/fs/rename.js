import fs from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const filePath = join(__dirname, 'files', 'wrongFilename.txt')
const fileNewPath = join(__dirname, 'files', 'properFilename.md')

const rename = async () => {
  fs.rename(filePath, fileNewPath, (err) => {
    if (err) {
      throw new Error('FS operation failed')
    } else {
      console.log('File successfully renamed')
    }
  })
}

await rename()
