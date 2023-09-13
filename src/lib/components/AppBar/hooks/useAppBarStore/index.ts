'use client'

import { create } from 'zustand'
import { UseAppBarStore } from './types'
import { AppBarConstant } from '../../constants'

const useAppBarStore = create<UseAppBarStore>((set, get) => ({
  constant: AppBarConstant,
  anchorElNav: null,
  anchorElUser: null,
  handleCloseNavMenu(page) {
    return () => {
      if (page) {
        const section = document.getElementById(page)
        const appBar = document.getElementById(get().constant.APP_BAR)
        if (section && appBar) {
          const top = section.offsetTop - appBar.clientHeight
          window.scroll({ top, behavior: 'smooth' })
        }
      }
      set({
        anchorElNav: null,
      })
    }
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
