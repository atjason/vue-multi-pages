<template>
  <div>
    <a href='/'>Home</a>
    <p>I'm the {{ name }} page.</p>
    
    <div>
      <input v-model='message'>
      <p>Message in user: {{ message }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'user',
  data() {
    return {
      name: 'user'
    }
  },
  computed: {
    message: {
      get() {
        return this.$store.state.message
      },
      set(newValue) {
        this.$store.commit('set', { message: newValue })
      }
    }
  }
}
</script>

<style>

</style>
