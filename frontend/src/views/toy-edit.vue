<template>
  <section>
    <button @click="goBack">go back</button>
    <pre>{{ toyToEdit }}</pre>
    <form @submit.prevent="save">
      <input type="text" placeholder="Toy name?" v-model="toyToEdit.name" />
      <input type="number" v-model="toyToEdit.price" />
      <input type="checkbox" v-model="toyToEdit.inStock" />
      <button>Save</button>
    </form>
  </section>
</template>

<script>

import { toyService } from '../services/toy.service.js';

export default {
  name: 'toy-edit',
  data() {
    return {
      toyToEdit: null,
    };
  },
  created() {
    const { id } = this.$route.params;
    console.log(id)

    if (id) {
      toyService.getById(id).then((toy) => {
        this.toyToEdit = toy;
      });
    } else this.toyToEdit = toyService.getEmptyToy();
  },
  methods: {
    goBack() {
      this.$router.push('/toy');
    },
    save() {
      console.log('this.toyToEdit', this.toyToEdit);
      this.$store.dispatch({ type: 'saveToy', toy: this.toyToEdit })
        .then(() => {
          this.$router.push('/toy');
        });
    },
  },
};
</script>