<template>
  <div class="signup">
    <AppHeader size="l" message-id="auth.signup" />
    <form id="Signup-form" v-on:submit.prevent="submitSignup">
      <div>
        <label for="email">{{ $t('auth.email') }}</label>
        <input type="text" id="email" name="email" v-model="email" autocomplete="off" />
      </div>
      <div>
        <label for="password">{{ $t('auth.password') }}</label>
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
          autocomplete="off"
        />
      </div>
      <button type="submit">{{ $t('auth.signup') }}</button>
    </form>
    <div>
      {{ $t('auth.existing_account') }} <RouterLink to="login">{{ $t('auth.login') }}</RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { signUpClicked } from '../auth'
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'SignupView',
  components: {
    AppHeader
  },
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
