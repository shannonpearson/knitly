<template>
  <div class="login">
    <h1>Login</h1>
    <form id="login-form">
      <div>
        <label for="username">Username</label>
        <input type="text" name="username" v-model="username" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password" />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: ''
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
