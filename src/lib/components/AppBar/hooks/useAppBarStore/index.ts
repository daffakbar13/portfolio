'use client'

import { create } from 'zustand'
import { UseAppBarStore } from './types'
import { AppBarConstant } from '../../constants'

const useAppBarStore = create<UseAppBarStore>((set) => ({
  constant: AppBarConstant,
  anchorElNav: null,
  anchorElUser: null,
  handleCloseNavMenu() {
    set({
      anchorElNav: null,
    })
  },
  handleCloseUserMenu() {
    set({
      anchorElUser: null,
    })
  },
  handleOpenNavMenu(e) {
    set({
      anchorElNav: e.currentTarget,
    })
  },
  handleOpenUserMenu(e) {
    set({
      anchorElUser: e.currentTarget,
    })
  },
}))

export default useAppBarStore
