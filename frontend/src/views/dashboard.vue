<template>
  <section v-if="toys">
    <h1>Percent dashboard of Toys by Labels</h1>
    <PieChart :chartData="testData" />
  </section>
</template>

<script>
import { toyService } from '../services/toy.service';
import { PieChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables);

export default {
  data() {
    return {
      toys: null,
      testData: {
        labels: ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"],
        datasets: [
          {
            data: [0, 0, 0, 0, 0, 0, 0],
            backgroundColor: [
              '#77CEFF',
              '#0079AF',
              '#123E6B',
              '#97B0C4',
              '#A5C8ED',
            ],
          },
        ],
      },
    }
  },
  created() {
    toyService.query().then((toys) => {
      this.toys = toys
      this.data()
    })
  },
  methods: {
    data() {
      var data = [0, 0, 0, 0, 0, 0, 0];

      this.testData.labels.forEach((label, idx) => {
        this.toys.filter((toy) => {
          if (toy.labels.includes(label))
            return data[idx] += 1
        })
      })

      data = data.map(num => {
        return num / data.length * 100
      })

      this.testData.datasets[0].data = data
      console.log(this.testData.datasets[0].data)
    }
  },
  components: {
    PieChart,
    toyService
  },
};
</script>