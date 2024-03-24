<template>
  <AuthForm :onSubmit="submitSignup" class-name="signup-form" headerMessageId="auth.signup">
    {{ $t('auth.existing_account') }} <RouterLink to="login">{{ $t('auth.login') }}</RouterLink>
  </AuthForm>
</template>

<script lang="ts">
import { signUpClicked } from '../auth'
import AuthForm from '@/components/forms/AuthForm.vue'

export default {
  name: 'SignupView',
  components: {
    AuthForm
  },
  methods: {
    submitSignup(email: string, password: string) {
      signUpClicked(email, password)
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
