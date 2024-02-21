<template>
  <div class="Signup">
    <h1>Signup</h1>
    <form id="Signup-form" v-on:submit.prevent="submitSignup">
      <div>
        <label for="email">Email</label>
        <input type="text" name="email" v-model="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password" />
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
