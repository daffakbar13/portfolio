import { getTmpFile } from '@daffa/utils/helpers'
import { HttpStatusCode } from 'axios'
import { Response } from '../response'
import { ProfileDto } from '../dto/profile.dto'

export namespace ProfileUsecase {
  const fileName = 'profile.json'

  export async function GetProfileList() {
    try {
      const data = await getTmpFile(fileName, { encoding: 'utf8' })
      const result: ProfileDto.Profile = JSON.parse(data)
      return Response.SendResponse(HttpStatusCode.Ok, result)
    } catch (err) {
      return Response.SendResponse(HttpStatusCode.InternalServerError, err as any)
    }
  }

  export type GetProfileListResponse = ReturnType<typeof GetProfileList>
}
