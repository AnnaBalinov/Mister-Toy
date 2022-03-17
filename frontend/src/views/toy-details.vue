<template>
  <section v-if="toy" class="toy-details">
    <article>
      <p><span >ID:</span> {{ toy._id }}</p>
      <p><span >Name:</span> {{ toy.name }}</p>
      <p><span>Price:</span> {{ $filters.currencyUSD(toy.price) }}</p>
      <article>
        <ul>
          <li v-for="review in toy.reviews" :key="review._id"> 
            {{review.name}}
            {{review.txt}}
            {{review.rate}}
          </li>
        </ul>
      </article>
    </article>
    <button @click="goBack">go back</button>
  </section>
</template>

<script>
import { toyService } from '../services/toy.service.js'

export default {
  name: 'toy-detail',
  data() {
    return {
      toy: null,
    }
  },
  created() {
    const { id } = this.$route.params
    toyService.getById(id).then((toy) => {
      this.toy = toy
    })
  },
  methods: {
    goBack() {
      this.$router.push('/toy')
    },
  },
}
</script>
