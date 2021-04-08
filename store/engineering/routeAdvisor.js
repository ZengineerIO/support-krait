import engineers from '@/store/engineering/engineers.json'
import modules from '@/store/engineering/modules.json'

export const state = () => ({
  engineers,
  modules,
  selectedEngineer: null,
  selectedEngineers: [],
})

export const mutations = {
  setSelectedEngineer(state, engineer) {
    state.selectedEngineer = engineer
  },

  addEngineer(state) {
    if (
      !state.selectedEngineers.includes(state.engineers[state.selectedEngineer])
    ) {
      state.selectedEngineers.push(state.engineers[state.selectedEngineer])
    }
  },

  removeEngineer(state, engineer) {
    const i = state.selectedEngineers.indexOf(engineer)
    if (i > -1) {
      state.selectedEngineers.splice(i, 1)
    }
  },
}
