<template>
  <div id='app'>
    <ul>
      <li><a href='/'>Home</a></li>
      <li><a href='/user.html'>User</a></li>
      <li><a href='/categories/category-a.html'>Category A</a></li>
      <li><a href='/categories/category-b.html'>Category B</a></li>
    </ul>
    
    <div>
      <input v-model='message'>
      <p>Message in home: {{ message }}</p>
    </div>

    <ul>
      <li><router-link to="/test">Test-Route</router-link></li>
      <li><router-link to="/test2">404 Route</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        name: 'index'
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
