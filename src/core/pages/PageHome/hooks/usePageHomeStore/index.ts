'use client'

import { create } from 'zustand'
import { UsePageHomeStore } from './types'
import { PageHomeConstant } from '../../constants'

const usePageHomeStore = create<UsePageHomeStore>(() => ({
  constant: PageHomeConstant,
}))

export default usePageHomeStore
