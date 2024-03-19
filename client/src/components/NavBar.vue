<template>
  <v-app-bar density="compact">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <div class="authenticated-route-links" v-if="isLoggedIn">
        <RouterLink to="/profile">Profile</RouterLink>
        <button @click="onLogoutClick">Log out</button>
      </div>
      <RouterLink to="/login" v-else>Login</RouterLink>
    </nav>
  </v-app-bar>
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
nav {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0px 15px;
}

a {
  padding: 0 8px;
}

button {
  margin: 0 5px;
}

.authenticated-route-links {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
