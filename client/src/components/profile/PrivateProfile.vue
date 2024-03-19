<template>
  <div>
    <h1>My Profile</h1>
    <div class="profile-details">
      <p>{{ displayName }}</p>
      <p>Email: {{ user?.email ?? '' }}</p>
      <p>Member since: {{ createdDate }}</p>
      <p>Last updated: {{ updatedDate }}</p>
    </div>
    <button @click="$emit('edit')">Update profile</button>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PrivateProfile',
  props: {
    user: {
      type: Object,
      required: true,
      default() {
        return {
          email: '',
          firstName: '',
          lastName: ''
        }
      }
    }
  },
  computed: {
    displayName() {
      return `${this.user?.firstName ?? ''} ${this.user?.lastName ?? ''}`.trim()
    },
    createdDate() {
      if (!this.user?.createdAt) {
        return ''
      }
      const d = new Date(this.user.createdAt)
      return d.toDateString()
    },
    updatedDate() {
      if (!this.user?.updatedAt) {
        return ''
      }
      const d = new Date(this.user.updatedAt)
      return d.toDateString()
    }
  }
}
</script>

<style scoped></style>
