<template>
  <div class="Signup">
    <h1>Signup</h1>
    <form id="Signup-form" v-on:submit.prevent="submitSignup">
      <div>
        <label for="email">Email</label>
        <input type="text" id="email" name="email" v-model="email" autocomplete="off" />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
          autocomplete="off"
        />
      </div>
      <button type="submit">Signup</button>
    </form>
    <div>Already have an account? <RouterLink to="login">Log in</RouterLink></div>
  </div>
</template>

<script lang="ts">
import { signUpClicked } from '../auth'

export default {
  name: 'SignupView',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    submitSignup() {
      console.log('exec submitSignup')
      signUpClicked(this.email, this.password)
    }
  }
}
</script>

<style scoped>
.signup {
  display: flex;
  flex-direction: column;
}
</style>
