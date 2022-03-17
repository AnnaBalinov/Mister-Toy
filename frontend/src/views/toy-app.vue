<template>
  <section class="toy-app-container">
    <h1>Toys</h1>
    <!-- <p v-if="isLoading">Loading...</p> -->
    <button @click="goToEdit" type="info">Add a new toy</button>
    <toy-filter @setFilter="setFilter" />
    <toy-list v-if="toys" @removeToy="removeToy" :toys="toysToShow" />
  </section>
</template>

<script>
import { toyService } from '../services/toy.service.js'
import toyFilter from '../components/toy-filter.vue'
import toyList from '../components/toy-list.vue'

export default {
  name: 'toy-app',
  data() {
    return {

    }
  },
  created() {
    this.$store.dispatch({type: 'loadToys'})
  },
  methods: {
    // loadToys() {
    //   toyService.query().then((toys) => (this.toys = toys))
    // },
    // setFilter(filterBy) {
    //   this.$store.commit({
    //     type: 'setFilter',
    //     filterBy: JSON.parse(JSON.stringify(filterBy))
    //   })
    // },
    setFilter(filterBy) {
      this.$store.dispatch({ type: 'filter', filterBy });
    },
    goToEdit() {
      this.$router.push(`/toy/edit`)
    },
    removeToy(toyId) {
      // console.log('app - id', toyId)
      this.$store.dispatch({ type: 'removeToy', id: toyId });
    },
  },
  computed: {
    // isLoading() {
    //   return this.$store.getters.isLoading
    // },
    toys() {
      return this.$store.getters.getToys
    },
    toysToShow() {
      return this.$store.getters.getToys
    }
  },
  components: {
    toyList,
    toyFilter,
  },
}
</script>
