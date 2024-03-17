<template>
  <div class="navbar">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <div class="authenticated-route-links" v-if="isLoggedIn">
        <RouterLink to="/profile">Profile</RouterLink>
        <button @click="onLogoutClick">Log out</button>
      </div>
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
nav > * {
  padding: 10px;
}

nav {
  display: flex;
  flex-direction: row;
}

button {
  margin: 0 5px;
}
</style>
