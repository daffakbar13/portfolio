import { Abortable } from 'events'
import { OpenMode } from 'fs'
import { mkdir, readFile, writeFile } from 'fs/promises'
import path from 'path'

export async function getTmpFilePath(fileName: string, isLocal: boolean = false) {
  const directories: string[] = []
  if (process.env.NODE_ENV === 'development' || isLocal) {
    directories.push(process.cwd())
  }
  directories.push('/tmp')
  const directory = path.join(...directories)
  await mkdir(directory, { recursive: true })
  return path.join(directory, fileName)
}

export async function getTmpFile(
  fileName: string,
  options:
    | ({
        encoding: BufferEncoding
        flag?: OpenMode | undefined
      } & Abortable)
    | BufferEncoding,
) {
  try {
    const filePath = await getTmpFilePath(fileName)
    const result = await readFile(filePath, options)
    return result
  } catch (error) {
    const prodFilePath = await getTmpFilePath(fileName)
    const localFilePath = await getTmpFilePath(fileName, true)
    const localFile = await readFile(localFilePath, options)
    await writeFile(prodFilePath, localFile)
    const result = await readFile(prodFilePath, options)
    return result
  }
}
