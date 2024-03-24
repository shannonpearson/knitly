<template>
  <div class="className">
    <v-form class="d-flex" @submit.prevent="handleSubmit">
      <v-container class="">
        <AppHeader size="l" :message-id="headerMessageId" />
        <v-row>
          <v-text-field
            label="Email"
            type="email"
            v-model="email"
            :rules="emailRules"
            autocomplete="email"
          />
        </v-row>
        <v-row>
          <v-text-field
            label="Password"
            type="password"
            v-model="password"
            :rules="passwordRules"
          />
        </v-row>
        <v-btn type="submit">{{ $t('auth.login') }}</v-btn>
        <div>
          <slot />
        </div>
      </v-container>
    </v-form>
  </div>
</template>

<script lang="ts">
import { assertString } from '@/utils/guards'
import AppHeader from '../AppHeader.vue'

export default {
  name: 'AuthForm',
  components: { AppHeader },
  props: {
    onSubmit: {
      type: Function,
      required: true
    },
    headerMessageId: {
      type: String,
      required: true
    },
    className: String
  },
  data(vm) {
    return {
      email: '',
      password: '',
      emailRules: [vm.validateEmailFormat as (input: any) => boolean | string],
      passwordRules: [vm.validatePasswordLength as (input: any) => boolean | string]
    }
  },
  methods: {
    handleSubmit() {
      this.onSubmit(this.email, this.password)
    },
    validateEmailFormat(input: any): boolean | string {
      assertString(input)
      const emailRegex = new RegExp('^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$')
      return emailRegex.test(input.trim()) || 'Invalid email format'
    },
    validatePasswordLength(input: any): boolean | string {
      assertString(input)
      if (input.length < 8) {
        return 'Password must be at least 8 characters'
      }
      if (input.length > 20) {
        return 'Password cannot exceed 20 characters'
      }
      return true
    }
  }
}
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
button {
  margin: 10px 0;
}
</style>
