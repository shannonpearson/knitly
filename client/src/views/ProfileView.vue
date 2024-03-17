<template>
  <div class="profile-container">
    <h1>My Profile</h1>
    <div class="profile-details">
      <p>{{ displayName }}</p>
      <p>Email: {{ user?.email ?? '' }}</p>
      <p>Member since: {{ createdDate }}</p>
      <p>Last updated: {{ updatedDate }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { useLoggedInUserStore } from '@/stores/loggedInUser'
import type User from '@/types/User'

export default {
  name: 'ProfileView',
  data() {
    return {
      loggedInUserStore: useLoggedInUserStore(),
      user: null as User | null
    }
  },
  computed: {
    displayName() {
      return `${this.user?.firstName ?? ''} ${this.user?.lastName ?? ''}`.trim()
    },
    createdDate() {
      if (!this.user?.createdAt) {
        return ''
      }
      const d = new Date(this.user.createdAt)
      return d.toDateString()
    },
    updatedDate() {
      if (!this.user?.updatedAt) {
        return ''
      }
      const d = new Date(this.user.updatedAt)
      return d.toDateString()
    }
  },
  created() {
    this.user = this.loggedInUserStore.user
  }
}
</script>

<style scoped></style>
