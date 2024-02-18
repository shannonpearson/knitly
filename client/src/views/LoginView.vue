<template>
  <div class="login">
    <h1>Login</h1>
    <form id="login-form" v-on:submit.prevent="submitLogin">
      <div>
        <label for="username">Username</label>
        <input type="text" name="username" v-model="username" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitLogin() {
      const url = `//localhost:${import.meta.env.VITE_API_PORT}/login`
      axios
        .post(url, { username: this.username, password: this.password })
        .then((res) => console.log('res:', res))
    }
  }
}
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
}
</style>
