import fs from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const filePath = join(__dirname, 'files', 'fresh.txt')

const create = async () => {
  await fs.writeFile(
    filePath,
    'I am fresh and young',
    { flag: 'wx+' },
    (err) => {
      if (err) throw new Error('FS operation failed')
    }
  )
  console.log('File created')
}

await create()
