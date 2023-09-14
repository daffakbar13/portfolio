/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-extraneous-dependencies */
import { createService } from '@daffa/configs/axios'
import { useQuery } from 'react-query'
import { Response } from '@daffa/server/response'
import { ProfileDto } from '@daffa/server/dto/profile.dto'

export namespace LocalService {
  const baseURL = '/api'
  const service = createService(baseURL)

  export function GetProfileList() {
    return service.get<null, ProfileDto.Profile>('/profile')
  }

  const useQueryResult = <T extends Promise<object> = Promise<Response.BaseResponse>>(
    func: () => T,
  ) => useQuery<Awaited<ReturnType<typeof func>>>(func.name, { enabled: true })

  GetProfileList.useGetProfileListQuery = () => useQueryResult(GetProfileList)
}
