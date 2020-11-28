<template>
  <div>
    <Chart v-if='dataLoaded' :data='data'/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Chart from '@/components/Chart'

export default {
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
  async mounted(){
    // Запрос на макро данные
    this.fetchMacro()
      .then(() => { this.data = this.macroData; this.dataLoaded = true })
  },
  methods: {
    ...mapActions(['fetchMacro']),
  },
  computed: {
    ...mapGetters(['macroData'])
  }
}
</script>

<style>

</style>