<template>
  <v-app-bar density="compact">
    <nav>
      <RouterLink to="/">{{ $t('nav.home') }}</RouterLink>
      <div class="authenticated-route-links" v-if="isLoggedIn">
        <RouterLink to="/profile">{{ $t('nav.profile') }}</RouterLink>
        <button @click="onLogoutClick">{{ $t('nav.logout') }}</button>
      </div>
      <RouterLink to="/login" v-else>{{ $t('nav.login') }}</RouterLink>
    </nav>
  </v-app-bar>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'
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
      this.loggedInUserStore.logout()
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
