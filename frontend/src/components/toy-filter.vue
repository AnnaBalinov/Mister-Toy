<template>
    <section class="toy-filter">
        <input v-model="filterBy.name" @input="setFilter" type="text" placeholder="Search..." />
        <label for="sortby">Sort By</label>
        <select
            name="sortby"
            id="sortby"
            @change="setFilter"
            v-model="filterBy.sortBy"
            placeholder="Sort By"
        >
            <option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                :disabled="item.disabled"
            />
        </select>
        <label for="inStock">In Stock</label>
        <input
            @change="toggleInStock"
            type="checkbox"
            id="inStock"
            name="inStock"
            checked
        />
        <select
            @change="setFilter"
            v-model="filterBy.labels"
            multiple
            collapse-tags
            placeholder="Category"
            style="width: 240px"
        >
            <option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </select>
    </section>
</template>

<script>
import { ref } from 'vue'

export default {
    name: 'toy-filter',
    data() {
        return {
            filterBy: {
                name: '',
                inStock: true,
                labels: [],
                sortBy: '',
            },
            value1: ref([]),
            value2: ref([]),
            value3: ref([]),
            options: [
                {
                    value: 'On wheels',
                    label: 'On wheels',
                },
                {
                    value: 'Box game',
                    label: 'Box game',
                },
                {
                    value: 'Baby',
                    label: 'Baby',
                },
                {
                    value: 'Doll',
                    label: 'Doll',
                },
                {
                    value: 'Puzzle',
                    label: 'Puzzle',
                },
                {
                    value: 'Outdoor',
                    label: 'Outdoor',
                },
            ],
            options2: [
                {
                    value: 'time',
                    label: 'time',
                },
                {
                    value: 'name',
                    label: 'name',
                },
                {
                    value: 'price',
                    label: 'price',
                },
            ]
        }
    },
    methods: {
        setFilter() {
            console.log(this.filterBy)
            // this.$emit('setFilter', this.filterBy)
            this.$emit('setFilter', JSON.parse(JSON.stringify(this.filterBy)));
        },
        toggleInStock() {
            this.filterBy.inStock = !this.filterBy.inStock
            this.setFilter()
        },

    },
}
</script>
