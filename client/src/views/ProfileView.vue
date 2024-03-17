<template>
  <div class="profile-container">
    <h1>My Profile</h1>
    <div>{{ user }}</div>
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
  created() {
    this.user = this.loggedInUserStore.user
  }
}
</script>

<style scoped></style>
