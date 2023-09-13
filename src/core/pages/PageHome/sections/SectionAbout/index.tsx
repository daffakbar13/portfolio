/* eslint-disable lines-around-directive */
/* eslint-disable import/no-extraneous-dependencies */
'use client'

import { ILDaffa } from '@daffa/assets'
import { GlobalConstant } from '@daffa/utils/constant'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import useMediaQuery from '@mui/material/useMediaQuery'
import Typewriter from 'typewriter-effect'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import DownloadIcon from '@mui/icons-material/Download'
import { Theme } from '@mui/material/styles'
import React from 'react'
import { usePageHomeStore } from '../../hooks'

const SectionAbout: React.FC = (props) => {
  const {} = props
  const { constant } = usePageHomeStore()
  const isLaptop = useMediaQuery((e: Theme) => e.breakpoints.up('md'))

  React.useEffect(() => {
    // const detector = new Detector()
    // const { browser, cpu, device, engine, gpu, os, platform } = detector
    // console.log({ browser, cpu, device, engine, gpu, os, platform })
    // eslint-disable-next-line no-console
    fetch('/api').then((res) => console.log(res.json()))
  })

  return (
    <Box id={constant.ABOUT} component="section" paddingY={isLaptop ? 16 : 8}>
      <Grid container spacing={2} columns={{ xs: 1, md: 2 }}>
        <Grid item xs={1}>
          <Stack gap={isLaptop ? 4 : 2}>
            <Typography variant="body1">{constant.HELLO_EVERYONE}</Typography>
            <Box>
              <Typography variant="h3" fontWeight="bold">
                {constant.IM}
              </Typography>
              <Typography variant="h3" fontWeight="bold">
                <Typewriter
                  options={{
                    strings: constant.OCCUPATION,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Typography>
            </Box>
            <Typography variant="body1">{constant.BIO_DESCRIPTION}</Typography>
            <Link
              href={constant.CV_FILE_PATH}
              download={constant.CV_FILE_NAME}
              target="_blank"
              rel="noreferer"
            >
              <Button startIcon={<DownloadIcon />}>Download CV</Button>
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={1}>
          <Box display="flex" justifyContent="center">
            <Avatar
              alt={GlobalConstant.AUTHOR_NAME}
              src={ILDaffa.src}
              variant="square"
              sx={{
                width: isLaptop ? '50%' : '80%',
                height: 'auto',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SectionAbout
