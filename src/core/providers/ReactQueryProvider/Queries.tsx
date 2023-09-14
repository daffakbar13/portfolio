/* eslint-disable import/no-extraneous-dependencies */
// import { useQueries } from 'react-query'
import { LocalService } from '@daffa/lib/services/local.service'
import React from 'react'
import { useQueries } from 'react-query'

export default function Queries() {
  // const q = useQueryKeyStore()
  useQueries([
    {
      queryKey: LocalService.GetProfileList.name,
      queryFn: () => LocalService.GetProfileList(),
    },
  ])

  return <></>
}
