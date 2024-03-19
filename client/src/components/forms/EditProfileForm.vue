<template>
  <div class="update-profile-form">
    <h1>Update profile info</h1>
    <div class="update-profile-form-fields">
      <p><label for="email">Email</label>{{ user.email }}</p>

      <p>
        <label for="firstName">First name</label><input type="text" v-model="formData.firstName" />
      </p>
      <p>
        <label for="lastName">First name</label><input type="text" v-model="formData.lastName" />
      </p>
    </div>
    <v-btn @click.once="handleSubmit">Save</v-btn>
  </div>
</template>

<script lang="ts">
export default {
  name: 'UpdateProfileForm',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      formData: {
        firstName: this.user.firstName || '',
        lastName: this.user.lastName || ''
      }
    }
  },
  methods: {
    // chosen over form submit only because can't find typescript form submit event type
    handleSubmit() {
      this.$emit('handleSubmit', this.formData)
    }
  }
}
</script>

<style scoped></style>
