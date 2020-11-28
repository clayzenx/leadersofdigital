<template>
  <div class="home">
    <Chart v-if="dataLoaded" :data="dataFact" :options="options"/>
  </div>
</template>

<script>
import Chart from '@/components/Chart'

export default {
  name: 'Home',
  components: {
    Chart
  },
  data(){
    return {
      dataLoaded: false,
      dataFact: {},
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted(){
    // get data from the server for the chart
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        // this.dataFact.labels = 
        this.dataFact.labels = users.map(user => user.id)

        this.dataFact.datasets = []
        
        this.dataFact.datasets.push({
          // data: users.map(user => user.name.length),
          data: [40, 39, 10, 40, 39, NaN ,NaN, NaN],
          borderColor: '#12ff52',
          fill: false,
          backgroundColor: `#${Math.round(Math.random() * 1000)}`,
          label: 'Факт',
        }) 
        this.dataFact.datasets.push({
          data: [NaN, NaN, NaN, NaN, 39, 40, 80, 40, 56, 72],
          borderColor: '#0a12f5',
          fill: false,
          label: 'Прогноз'
        })
        this.dataLoaded = true
        console.log(this.data);
      })
      .catch(e => console.log(e))
  }
}
</script>

<style>
  
</style>
