<template>
  <div class="navbar">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'

export default {
  name: 'NavBar',
  components: { RouterLink }
}
</script>

<style scoped></style>
