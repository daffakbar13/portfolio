import { AppBar } from '@daffa/lib/components'
import { MuiProvider, ReactQueryProvider } from '@daffa/core/providers'
import Box from '@mui/material/Box'
import { MainLayoutProps } from './types'

const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { children } = props
  return (
    <html lang="en">
      <body>
        <MuiProvider>
          <ReactQueryProvider>
            <AppBar />
            <Box component="main">{children}</Box>
          </ReactQueryProvider>
        </MuiProvider>
      </body>
    </html>
  )
}

export default MainLayout
