export default {
  state(){
    return {
      initMacroData: [],
      macroData: []
    }
  },
  mutations: {
    updateMacro(state, data){
      state.macroData = data
      state.initMacroData = data 
    },
    changeState(state, id, mode){
      state.macroData.map(dataset => dataset.id = id).forEach(dataset => dataset.visible = mode)
    },
    // filterMacro(state, filter, mode){
    //   state.macroData = state.macroData.filter()
    // }
  },
  actions: {
    async fetchMacro(ctx){
      console.log('fetch macro data started');
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
      const macroData = await response.json()
      console.log(macroData);

      ctx.commit('updateMacro', macroData)

      return Promise.resolve('done')
    },

  },
  getters: {
    macroData(state){
      // return state.macroData

      let macro = {
        
      }
      macro.labels = state.macroData.map(user => user.id)
      console.log(macro.labels);

      macro.datasets = []
      macro.datasets.push({
        id: 0,
        data: [40, 39, 10, 40, 39, NaN ,NaN, NaN],
        borderColor: '#12ff52',
        fill: false,
        label: 'г1 Факт',
      })
      macro.datasets.push({
        id: 0,
        data: [40, 39, 10, 40, 39, NaN ,NaN, NaN],
        borderColor: '#12ff52',
        fill: false,
        label: 'г1 Прогноз',
      })
      return macro
    }
  }
}