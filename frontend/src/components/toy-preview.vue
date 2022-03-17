<template>
  <li class="toy-preview">
    <div class="info">
      <p>{{ toy.name }}</p>
      <p class="price">{{ $filters.currencyUSD(toy.price) }}</p>
    </div>
    <div class="btn">
      <button @click="goToEdit(toy._id)">edit</button>
      <!-- <el-button @click="goToEdit" type="success">Edit</el-button> -->
      <button @click="goToDetail(toy._id)">details</button>
      <!-- <el-button @click="goToDetail" type="warning">Details</el-button> -->
      <button @click="removeToy(toy._id)">delete</button>
      <!-- <el-button @click="removeToy(toy._id)" type="danger">Delete</el-button> -->
    </div>
  </li>
</template>

<script>

export default {
  name: 'toy-preview',
  props: {
    toy: Object,
  },
  components: {
  },
  methods: {
    goToDetail(toyId) {
      this.$router.push(`/toy/${toyId}`)
    },
    goToEdit(toyId) {
      console.log('preview - id', toyId)
      this.$router.push(`/toy/edit/${toyId}`)
    },
    removeToy(toyId) {
      // console.log('preview - id', toyId)
      this.$emit('removeToy', toyId)
    },
  },
}
</script>
