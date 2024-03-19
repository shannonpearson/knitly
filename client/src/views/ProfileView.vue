<template>
  <div class="profile-container">
    <div v-if="editing && user">
      <EditProfileForm @handle-submit="updateProfile" :user="user" />
    </div>
    <div v-else-if="user">
      <PrivateProfile :user="user" @edit="() => updateEditingState(true)" />
    </div>
    <div v-else>No profile to show! This page should never appear!</div>
  </div>
</template>

<script lang="ts">
import { useLoggedInUserStore } from '@/stores/loggedInUser'
import type User from '@/types/User'
import PrivateProfile from '@/components/profile/PrivateProfile.vue'
import EditProfileForm from '@/components/forms/EditProfileForm.vue'
import { storeToRefs } from 'pinia'

export default {
  name: 'ProfileView',
  components: { PrivateProfile, EditProfileForm },
  data() {
    return {
      loggedInUserStore: useLoggedInUserStore(),
      // user: null as User | null,
      editing: false
    }
  },
  methods: {
    updateEditingState(editing: boolean) {
      this.editing = editing
    },
    async updateProfile(userData: Partial<User>) {
      if (this.user?.id) {
        await this.loggedInUserStore.updateProfile({ id: this.user.id, ...userData })
      }
      this.updateEditingState(false)
    }
  },
  computed: {
    user() {
      return storeToRefs(this.loggedInUserStore).user.value
    }
  }
  // created() {
  //   const { user } = storeToRefs(this.loggedInUserStore)
  //   this.user = user
  // }
}
</script>

<style scoped></style>
