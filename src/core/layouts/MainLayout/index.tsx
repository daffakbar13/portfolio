import { AppBar } from '@daffa/lib/components'
import { MuiProvider } from '@daffa/core/providers'
import Box from '@mui/material/Box'
import { MainLayoutProps } from './types'

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { children } = props
  return (
    <html lang="en">
      <body>
        <MuiProvider>
          <AppBar />
          <Box component="main" padding={2}>
            {children}
          </Box>
        </MuiProvider>
      </body>
    </html>
  )
}

export default MainLayout
