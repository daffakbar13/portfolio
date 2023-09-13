import { mkdir, readFile, writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'

type ResponseData = {
  message: string
}

export async function GET(req: NextRequest) {
  function getFilePath() {
    const fileName = '/logs.json'
    const directory = '/tmp/json'
    if (process.env.NODE_ENV === 'development') {
      mkdir(path.join(process.cwd(), directory), { recursive: true })
      return path.join(process.cwd(), directory, fileName)
    }
    mkdir(directory, { recursive: true })
    return directory + fileName
  }
  const filePath = getFilePath()
  await writeFile(filePath, JSON.stringify({ message: req.nextUrl.searchParams.get('text') }))
  const data = await readFile(filePath, { encoding: 'utf8' })
  return NextResponse.json<ResponseData>({ ...JSON.parse(data), ...{ filePath } }, { status: 200 })
}
