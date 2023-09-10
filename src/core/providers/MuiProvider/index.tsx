import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from '@daffa/lib/styles/theme'
import React from 'react'
import { MuiProviderProps } from './types'

const MuiProvider: React.FC<MuiProviderProps> = (props) => {
  const { children } = props

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default MuiProvider
