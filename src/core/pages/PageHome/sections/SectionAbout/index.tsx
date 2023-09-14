/* eslint-disable lines-around-directive */
/* eslint-disable import/no-extraneous-dependencies */
'use client'

import { ILDaffa } from '@daffa/assets'
import { GlobalConstant } from '@daffa/utils/constant'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import Typewriter from 'typewriter-effect'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import DownloadIcon from '@mui/icons-material/Download'
import { Theme } from '@mui/material/styles'
import React from 'react'
import { LocalService } from '@daffa/lib/services/local.service'
import GitHubIcon from '@mui/icons-material/GitHub'
import Link from '@mui/material/Link'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { usePageHomeStore } from '../../hooks'

const SectionAbout: React.FC = (props) => {
  const {} = props
  const { constant } = usePageHomeStore()
  const isLaptop = useMediaQuery((e: Theme) => e.breakpoints.up('md'))
  const profile = LocalService.GetProfileList.useGetProfileListQuery()

  return (
    <Box id={constant.ABOUT} component="section" paddingY={isLaptop ? 16 : 8}>
      {profile.isSuccess && profile.data && (
        <>
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
                <Box display="flex" justifyContent="space-between" alignItems="center" gap={2}>
                  <Link
                    href={constant.CV_FILE_PATH}
                    download={constant.CV_FILE_NAME}
                    target="_blank"
                    rel="noreferer"
                  >
                    <Button startIcon={<DownloadIcon />}>Download CV</Button>
                  </Link>
                  <Box display="flex" gap={2} sx={{ '& svg': { color: 'GrayText' } }}>
                    <Link href={profile.data.github_url} target="_blank">
                      <GitHubIcon />
                    </Link>
                    <Link href={profile.data.linkedin_url} target="_blank">
                      <LinkedInIcon />
                    </Link>
                  </Box>
                </Box>
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
          {/* <Stack spacing={4}>
            {Object.entries(profile.data).map(([key, value], i) => (
              <React.Fragment key={i}>
                {typeof value === 'string' && (
                  <TextField defaultValue={value} multiline label={startCase(key)} />
                )}
              </React.Fragment>
            ))}
          </Stack> */}
        </>
      )}
    </Box>
  )
}

export default SectionAbout
