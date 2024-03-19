<template>
  <div>
    <AppHeader size="l" message-id="profile.title_view" />
    <v-container class="profile-details">
      <v-row>
        <v-col cols="2">{{ $t('profile.name') }}:</v-col>
        <v-col>
          {{ displayName }}
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">{{ $t('profile.email') }}:</v-col>
        <v-col>
          {{ user?.email ?? '' }}
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">{{ $t('profile.member_since') }}:</v-col>
        <v-col>
          {{ createdDate }}
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">{{ $t('profile.last_updated') }}:</v-col>
        <v-col>
          {{ updatedDate }}
        </v-col>
      </v-row>
    </v-container>
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
