export const state = () => ({
  factionId: 76830,
  factionName: null,
  factionLastUpdate: null,
  systems: [],
  selectedSystems: [],
  fetching: false,
  fetchingError: null,
})

export const mutations = {
  setFactionId(state, Id) {
    state.factionId = Id
  },
  setFactionName(state, name) {
    state.factionName = name
  },
  setFactionLastUpdate(state, update) {
    state.factionLastUpdate = update
  },
  toggleFetching(state) {
    state.fetching = !state.fetching
  },
  setFetchingError(state, error) {
    state.fetchingError = error
  },
  systemsAdd(state, system) {
    state.systems.push(system)
  },
  systemsRemove(state, system) {},
  setSystems(state, systems) {
    state.systems = systems
  },
  setSelectedSystems(state, systems) {
    state.selectedSystems = systems
  },
}

export const actions = {
  async getSystems({ commit, state }) {
    commit('toggleFetching')
    let res
    try {
      res = await fetch(
        `https://elitebgs.app/api/ebgs/v5/factions?eddbId=${state.factionId}`,
        {
          method: 'GET',
        }
      ).then((res) => res.json())

      if (res.docs.length > 0) {
        const systems = []
        res.docs[0].faction_presence.forEach((system) => {
          system.updated_at = new Date(system.updated_at)
          systems.push(system)
        })

        commit('setFactionName', res.docs[0].name)
        commit('setFactionLastUpdate', new Date(res.docs[0].updated_at))
        commit('setSystems', systems)
      } else {
        commit(
          'setFetchingError',
          'No faction data recieved! Please re-check Faction ID!'
        )
      }
    } catch (error) {
      commit('setFetchingError', error)
    }
    commit('toggleFetching')
  },
}
