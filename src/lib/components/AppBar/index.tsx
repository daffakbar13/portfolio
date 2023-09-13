'use client'

import * as React from 'react'
import AppBarMui from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import CodeIcon from '@mui/icons-material/Code'
import { GlobalConstant } from '@daffa/utils/constant'
import { ICDaffa } from '@daffa/assets'
import { HideOnScroll, LogoAppBar1 } from './components'
import { useAppBarStore } from './hooks'

const AppBar: React.FC = () => {
  const {
    constant,
    anchorElNav,
    anchorElUser,
    handleCloseNavMenu,
    handleCloseUserMenu,
    handleOpenNavMenu,
    handleOpenUserMenu,
  } = useAppBarStore()

  return (
    <HideOnScroll>
      <AppBarMui id={constant.APP_BAR} position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <LogoAppBar1>{GlobalConstant.AUTHOR_NAME}</LogoAppBar1>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu()}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {constant.PAGES.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu(page)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <CodeIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {GlobalConstant.AUTHOR_NAME}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {constant.PAGES.map((page, i) => (
                <Button
                  key={i}
                  onClick={handleCloseNavMenu(page)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={constant.SETTING_TOOLTIP_TITLE}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={GlobalConstant.AUTHOR_NAME} src={ICDaffa.src} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {constant.SETTINGS.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBarMui>
    </HideOnScroll>
  )
}

export default AppBar
