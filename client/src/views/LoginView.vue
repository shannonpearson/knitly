<template>
  <div class="login">
    <AppHeader size="l" message-id="auth.login" />
    <form id="login-form" v-on:submit.prevent="submitLogin">
      <div>
        <label for="email">{{ $t('auth.email') }}</label>
        <input type="text" name="email" id="email" v-model="email" autocomplete="on" />
      </div>
      <div>
        <label for="password">{{ $t('auth.password') }}</label>
        <input type="password" name="password" id="password" v-model="password" autocomplete="on" />
      </div>
      <button type="submit">{{ $t('auth.login') }}</button>
    </form>
    <div>
      {{ $t('auth.no_account') }}<RouterLink to="signup">{{ $t('auth.signup') }}</RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { logInClicked } from '../auth'
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'LoginView',
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
