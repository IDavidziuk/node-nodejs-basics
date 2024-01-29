import { writeFile } from 'fs'

const create = async () => {
  writeFile('fresh.txt', 'I am fresh and young', { flag: 'wx' }, (err) => {
    if (err) throw new Error('FS operation failed')
  })
}

await create()
