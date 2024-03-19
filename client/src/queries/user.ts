import axios from 'axios'
import type User from '@/types/User'
import * as Session from 'supertokens-web-js/recipe/session'

export const getLoggedInUser = async () => {
  const loggedInUserSuperokensId = await Session.getUserId()
  const url = `${import.meta.env.VITE_API_URL}/users/${loggedInUserSuperokensId}`
  const { data } = await axios.get(url)
  return data
}

export const updateLoggedInUser = async (userData: Partial<User>) => {
  const loggedInUserSuperokensId = await Session.getUserId()
  const url = `${import.meta.env.VITE_API_URL}/users/${loggedInUserSuperokensId}`
  const { data } = await axios.put(url, userData)
  return data
}
