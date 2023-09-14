import axios from 'axios'
import { NextResponse } from 'next/server'

export namespace Response {
  type Data = string | object | null

  const buildResponse = <T extends Data = null>(status: number, data?: T) => ({
    data: data || null,
    status,
    message: axios.HttpStatusCode[status],
  })

  export type BaseResponse<T extends Data = null> = ReturnType<typeof buildResponse<T>>

  export function SendResponse<T extends Data = null>(...arg: Parameters<typeof buildResponse<T>>) {
    const [status, data] = arg
    const response = buildResponse(status, data)
    return NextResponse.json(response, {
      status,
      statusText: response.message,
    })
  }
}
