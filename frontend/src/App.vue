<template>
  <section class="app-container">
    <app-header />
    <router-view class="main-container" />
  </section>
</template>

<script>
import appHeader from './components/app-header.vue'

export default {
  name: 'app',
  created() {
    console.log('Vue App created');
    // this.$store.dispatch({ type: 'loadCars' })
    this.$store.dispatch('loadToys')
  },
  methods: {
  },
  components: {
    appHeader,
  },
}
</script>