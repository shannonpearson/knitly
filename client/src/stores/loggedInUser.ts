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
      console.log('exec getAuthState')
      const isAuthenticated = await doesSessionExist()
      console.log('isAuthenticated', isAuthenticated)
      this.isLoggedIn = isAuthenticated
      if (isAuthenticated) {
        const loggedInUserSuperokensId = await Session.getUserId()
        // fetch logged in user from db
        console.log('loggged in', loggedInUserSuperokensId)
        const {
          data: { currentUser }
        } = await axios.get(`/users/${loggedInUserSuperokensId}`)
        console.log('fetched current user:', currentUser, await doesSessionExist())
        this.user = currentUser
      } else {
        this.user = null
      }
    },
    setUser(user: User | null) {
      console.log('setting user', user)
      this.user = user
    },
    setLoggedIn(loggedIn: boolean) {
      console.log('setting logged in', loggedIn)
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
