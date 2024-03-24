<template>
  <v-sheet class="profile-container">
    <div v-if="editing && user">
      <EditProfileForm @handle-submit="updateProfile" :user="user" />
    </div>
    <div v-else-if="user">
      <PrivateProfile :user="user" @edit="() => updateEditingState(true)" />
    </div>
    <div v-else>No profile to show! This page should never appear!</div>
  </v-sheet>
</template>

<script lang="ts">
import router from '@/router'
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
    },
    redirectMissingUser() {
      console.log('no user, redirecting')
      router.push('/login')
    }
  },
  computed: {
    user() {
      return storeToRefs(this.loggedInUserStore).user.value
    }
  },
  created() {
    if (
      storeToRefs(this.loggedInUserStore).isLoggedIn.value &&
      !storeToRefs(this.loggedInUserStore).user.value
    ) {
      this.redirectMissingUser()
    }
  }
}
</script>

<style scoped>
.v-sheet {
  margin: 0 20px;
}
:deep(button) {
  margin-top: 20px;
}
</style>
