/* eslint-disable no-unused-vars */

import { AppBarConstant } from '../../../constants'

interface UseAppBarState {
  constant: typeof AppBarConstant
  anchorElNav: null | HTMLElement
  anchorElUser: null | HTMLElement
}

interface UseAppBarAction {
  handleOpenNavMenu: (e: React.MouseEvent<HTMLElement>) => void
  handleOpenUserMenu: (e: React.MouseEvent<HTMLElement>) => void
  handleCloseNavMenu: () => void
  handleCloseUserMenu: () => void
}

export type UseAppBarStore = UseAppBarState & UseAppBarAction
