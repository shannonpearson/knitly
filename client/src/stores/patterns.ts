import { defineStore } from 'pinia'
import type Pattern from '@/types/Pattern'

export const usePatternsStore = defineStore('patterns', {
  state: () => ({
    patternsById: {} as { [key: string]: Pattern }
  }),

  actions: {
    getPatternById(id: string) {
      return this.patternsById[id]
    }
  }
})
