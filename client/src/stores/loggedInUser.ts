import { defineStore } from 'pinia'
import axios from 'axios'
import type User from '@/types/User'
import * as Session from 'supertokens-web-js/recipe/session'
import { doesSessionExist } from 'supertokens-web-js/recipe/session'

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
        const loggedInUserSuperokensId = await Session.getUserId()
        const url = `${import.meta.env.VITE_API_URL}/users/${loggedInUserSuperokensId}`
        const { data: currentUser } = await axios.get(url)
        this.user = currentUser
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
    handleLogout() {
      this.setUser(null)
      this.setLoggedIn(false)
    },
    handleLogin(u: User) {
      this.setUser(u)
      this.setLoggedIn(true)
    }
  }
})
