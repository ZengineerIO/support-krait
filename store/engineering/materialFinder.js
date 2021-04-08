import edMaterials from '@/store/engineering/materials.json'
import filter from 'lodash/filter'
import orderBy from 'lodash/orderBy'

export const state = () => ({
  materialCategories: ['All', 'Manufactured', 'Data', 'Raw'],
  materialGrades: [
    'All',
    'VeryCommon',
    'Common',
    'Standard',
    'Rare',
    'VeryRare',
  ],
  selectedMaterialCategory: 'All',
  selectedMaterialGrade: 'All',
  selectedMaterial: null,
  limitResults: '10',
  systemsWithDrops: [],
  fetching: false,
  fetchingError: null,
})

export const mutations = {
  setSelectedMaterialCategory(state, category) {
    state.selectedMaterialCategory = category
  },

  setSelectedMaterialGrade(state, grade) {
    state.selectedMaterialGrade = grade
  },

  setSelectedMaterial(state, material) {
    state.selectedMaterial = material
  },

  setSystemsWithDrops(state, systems) {
    state.systemsWithDrops = systems
  },

  addSystemWithDrops(state, system) {
    state.systemsWithDrops.push(system)
  },

  setLimitResults(state, limit) {
    state.limitResults = limit
  },

  resetFetchingError(state) {
    state.fetchingError = null
  },

  toggleFetching(state) {
    state.fetching = !state.fetching
  },

  setFetchingError(state, error) {
    state.fetchingError = error
  },
}

export const actions = {
  async getSystemsWithDrops({ commit, state }) {
    const url = 'https://api.canonn.tech:2053/materialreports'
    const material = `journalName_contains=${state.selectedMaterial}`
    const order = '&_sort=created_at:DESC'
    const limit =
      state.limitResults === 'All' ? '' : `&_limit=${state.limitResults}`

    let res
    try {
      commit('toggleFetching')
      res = await fetch(`${url}?${material}${order}${limit}`, {
        method: 'GET',
      }).then((res) => res.json())

      commit('setSystemsWithDrops', res)
      commit('toggleFetching')
    } catch (error) {
      commit('setFetchingError', error)
    }
  },
}

export const getters = {
  getSystems(state) {
    const systems = {}
    state.systemsWithDrops.forEach((system) => {
      if (!systems[system.system]) {
        systems[system.system] = {
          system_name: system.system,
          count: system.count,
        }
      } else {
        systems[system.system].count += system.count
      }
    })

    return orderBy([...Object.values(systems)], ['count'], ['desc'])
  },
  getMaterialsOptions: (state) => {
    const q = {}
    if (state.selectedMaterialCategory !== 'All') {
      q.Subkind = state.selectedMaterialCategory
    }
    if (state.selectedMaterialGrade !== 'All') {
      q.Rarity = state.selectedMaterialGrade
    }

    const materials = filter(edMaterials, q)
    materials.forEach((material) => {
      material.value = material.FormattedName
      switch (material.Rarity) {
        case 'VeryCommon':
          material.grade = 'G1'
          break
        case 'Common':
          material.grade = 'G2'
          break
        case 'Standard':
          material.grade = 'G3'
          break
        case 'Rare':
          material.grade = 'G4'
          break
        case 'VeryRare':
          material.grade = 'G4'
          break
      }
      material.text = `${material.Name} (${material.Subkind} - ${material.Group} - ${material.grade})`
    })

    return orderBy(
      materials,
      ['Subkind', 'Group', 'grade'],
      ['asc', 'asc', 'asc']
    )
  },
}
