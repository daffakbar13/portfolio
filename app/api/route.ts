import { readFile, writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'

type ResponseData = {
  message: string
}

export async function GET(req: NextRequest) {
  const filePath = path.join(process.cwd(), '/public/json/logs.json')
  await writeFile(filePath, JSON.stringify({ message: req.nextUrl.searchParams.get('text') }))
  const data = await readFile(filePath, { encoding: 'utf8' })
  return NextResponse.json<ResponseData>({ ...JSON.parse(data), ...{ filePath } }, { status: 200 })
}
