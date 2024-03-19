<template>
  <component :is="headerElement">{{ $t(messageId) }}</component>
</template>

<script lang="ts">
export default {
  name: 'AppHeader',
  props: {
    messageId: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default() {
        return 'm'
      },
      validator(value: string) {
        return ['s', 'm', 'l'].includes(value)
      }
    }
  },
  computed: {
    headerElement() {
      switch (this.size) {
        case 's':
          return 'h4'
        case 'm':
          return 'h3'
        case 'l':
          return 'h2'
        default:
          return 'h3'
      }
    }
  }
}
</script>

<style scoped>
h1,
h2,
h3 {
  padding: 5px;
}
</style>
