'use client'

import { NextPage } from 'next'
import { usePageHomeStore } from './hooks'

const Page: NextPage = () => {
  const { constant } = usePageHomeStore()

  return <>{constant.MAINTENANCE_TEXT}</>
}

export default Page
