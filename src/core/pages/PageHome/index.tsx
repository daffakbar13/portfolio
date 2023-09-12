/* eslint-disable lines-around-directive */
/* eslint-disable import/no-extraneous-dependencies */
'use client'

import { NextPage } from 'next'
import Stack from '@mui/material/Stack'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Theme } from '@mui/material/styles'
import { SectionAbout, SectionService } from './sections'

const Page: NextPage = () => {
  const isLaptop = useMediaQuery((e: Theme) => e.breakpoints.up('md'))

  // return <>{constant.MAINTENANCE_TEXT}</>

  return (
    <Stack spacing={4} paddingY={isLaptop ? 16 : 8} paddingX={isLaptop ? 24 : 2}>
      <SectionAbout />
      <SectionService />
    </Stack>
  )
}

export default Page
