import { defineStore } from 'pinia'
import type User from '@/types/User'
import Session, { doesSessionExist } from 'supertokens-web-js/recipe/session'

import { getLoggedInUser, updateLoggedInUser } from '@/queries/user'

// this is an OPTIONS store
export const useLoggedInUserStore = defineStore('loggedInUser', {
  state: () => ({
    isLoggedIn: false,
    user: null as User | null
  }),
  actions: {
    async initialize() {
      this.getAuthState()
    },
    async getAuthState() {
      const isAuthenticated = await doesSessionExist()
      this.isLoggedIn = isAuthenticated

      if (isAuthenticated) {
        const currentUser = await getLoggedInUser()
        if (!currentUser) {
          this.logout()
        } else {
          this.user = currentUser
        }
      } else {
        this.user = null
      }
    },
    setUser(user: User | null) {
      this.user = user
    },
    setLoggedIn(loggedIn: boolean) {
      this.isLoggedIn = loggedIn
    },
    async logout() {
      await Session.signOut()
      this.handleLogout()
    },
    handleLogout() {
      this.setUser(null)
      this.setLoggedIn(false)
    },
    handleLogin(u: User) {
      this.setUser(u)
      this.setLoggedIn(true)
    },
    async updateProfile(u: Partial<User>) {
      const updatedUser = await updateLoggedInUser(u)
      this.user = updatedUser
    }
  }
})
