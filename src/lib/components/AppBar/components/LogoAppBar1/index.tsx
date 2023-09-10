import Typography from '@mui/material/Typography'
import { LogoAppBarProps } from './types'

const LogoAppBar1: React.FC<LogoAppBarProps> = (props) => {
  const { children } = props
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      {children}
    </Typography>
  )
}

export default LogoAppBar1
