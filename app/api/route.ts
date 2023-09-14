import { mkdir, readFile, writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'

type ResponseData = {
  message: string
}

async function getFilePath() {
  const directories: string[] = []
  if (process.env.NODE_ENV === 'development') {
    directories.push(process.cwd())
  }
  directories.push('/tmp/json')
  const directory = path.join(...directories)
  await mkdir(directory, { recursive: true })
  return path.join(directory, '/logs.json')
}

export async function GET() {
  const filePath = await getFilePath()
  const data = await readFile(filePath, { encoding: 'utf8' })
  return NextResponse.json<ResponseData>({ ...JSON.parse(data), filePath }, { status: 200 })
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const filePath = await getFilePath()
  await writeFile(filePath, JSON.stringify(body))
  const data = await readFile(filePath, { encoding: 'utf8' })
  return NextResponse.json<ResponseData>({ ...JSON.parse(data), filePath }, { status: 200 })
}
