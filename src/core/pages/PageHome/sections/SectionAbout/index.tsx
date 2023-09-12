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
import { Theme } from '@mui/material/styles'
import { usePageHomeStore } from '../../hooks'

const SectionAbout: React.FC = (props) => {
  const {} = props
  const { constant } = usePageHomeStore()
  const isLaptop = useMediaQuery((e: Theme) => e.breakpoints.up('md'))

  return (
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
            <Button>Download CV</Button>
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
  )
}

export default SectionAbout
