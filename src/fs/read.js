import fs from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const filePath = join(__dirname, 'files', 'fileToRead.txt')

const read = async () => {
  await fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      throw new Error('FS operation failed')
    } else {
      console.log(data)
    }
  })
}

await read()
