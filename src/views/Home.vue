<template>
  <div class="home">
    <Chart v-if="dataLoaded" :data="data" :options="options"/>
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
      data: {},
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
        this.data.labels = users.map(user => user.name)
        this.data.datasets = [{
          data: users.map(user => user.name.length),
          backgroundColor: `#${Math.round(Math.random() * 1000)}`,
          label: 'name length'
        }]
        this.dataLoaded = true
        console.log(this.data);
      })
      .catch(e => console.log(e))
  }
}
</script>
