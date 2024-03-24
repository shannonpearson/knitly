<template>
  <AuthForm :onSubmit="submitLogin" class-name="login-form" headerMessageId="auth.login">
    {{ $t('auth.no_account') }}<RouterLink to="signup">{{ $t('auth.signup') }}</RouterLink>
  </AuthForm>
</template>

<script lang="ts">
import { logInClicked } from '../auth'
import AuthForm from '../components/forms/AuthForm.vue'

export default {
  name: 'LoginView',
  components: {
    AuthForm
  },
  methods: {
    submitLogin(email: string, password: string) {
      logInClicked(email, password)
    }
  }
}
</script>

<style scoped></style>
