<template>
  <div>
    <AppHeader size="l" message-id="profile.title_view" />
    <div class="profile-details">
      <p>{{ displayName }}</p>
      <p>Email: {{ user?.email ?? '' }}</p>
      <p>Member since: {{ createdDate }}</p>
      <p>Last updated: {{ updatedDate }}</p>
    </div>
    <v-btn @click="$emit('edit')">{{ $t('profile.button_edit') }}</v-btn>
  </div>
</template>

<script lang="ts">
import AppHeader from '../AppHeader.vue'

export default {
  name: 'PrivateProfile',
  components: { AppHeader },
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
