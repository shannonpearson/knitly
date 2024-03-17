<template>
  <div class="login">
    <h1>Login</h1>
    <form id="login-form" v-on:submit.prevent="submitLogin">
      <div>
        <label for="email">Email</label>
        <input type="text" name="email" id="email" v-model="email" autocomplete="on" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="password" autocomplete="on" />
      </div>
      <button type="submit">Login</button>
    </form>
    <div>No account? <RouterLink to="signup">Sign up</RouterLink></div>
  </div>
</template>

<script lang="ts">
import { logInClicked } from '../auth'

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitLogin() {
      console.log('exec submitLogin')
      logInClicked(this.email, this.password)
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
