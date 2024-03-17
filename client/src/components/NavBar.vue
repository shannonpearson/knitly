<template>
  <div class="navbar">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/profile">Profile</RouterLink>
      <button @click="onLogoutClick" v-if="isLoggedIn">Log out</button>
      <RouterLink to="/login" v-else>Login</RouterLink>
    </nav>
  </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'
import Session from 'supertokens-web-js/recipe/session'
import { useLoggedInUserStore } from '@/stores/loggedInUser'

export default {
  name: 'NavBar',
  components: { RouterLink },
  data() {
    return {
      loggedInUserStore: useLoggedInUserStore()
    }
  },
  methods: {
    async onLogoutClick() {
      console.log('on logout')
      await Session.signOut()
      console.log('done')
      this.loggedInUserStore.handleLogout()
    }
  },
  computed: {
    isLoggedIn(): boolean {
      return this.loggedInUserStore.isLoggedIn
    }
  }
}
</script>

<style scoped>
a {
  padding: 10px;
}
</style>
