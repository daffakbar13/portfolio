/* eslint-disable lines-around-directive */
/* eslint-disable import/no-extraneous-dependencies */
'use client'

import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Marquee from 'react-fast-marquee'
import Stack from '@mui/material/Stack'
import { usePageHomeStore } from '../../hooks'

const SectionService: React.FC = (props) => {
  const {} = props
  const { constant } = usePageHomeStore()

  return (
    <Stack id={constant.SERVICES} component="section" spacing={4}>
      <Typography variant="h4" fontWeight="bold" textAlign="center">
        {constant.SERVICES}
      </Typography>
      <Marquee pauseOnHover pauseOnClick autoFill>
        {constant.SERVICE_LOGOS.map((icon, i) => (
          <Avatar
            key={i}
            sx={{ height: 64, width: 'auto', marginX: 2 }}
            src={icon.src}
            variant="square"
          />
        ))}
      </Marquee>
    </Stack>
  )
}

export default SectionService
