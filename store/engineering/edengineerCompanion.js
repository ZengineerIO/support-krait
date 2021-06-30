export const state = () => ({
  cmdrsAvailable: [],
  selectedCmdr: '',
  cmdr: null,
  shoppingList: [],
  blueprintsAll: [],
  materialsInventory: [],
  missingMaterials: [],
  errors: [],
})

export const mutations = {
  setCmdrsAvailable(state, cmdrs) {
    state.cmdrsAvailable = cmdrs
  },

  setSelectedCmdr(state, cmdr) {
    state.selectedCmdr = cmdr
  },

  setCmdr(state, cmdr) {
    state.cmdr = cmdr
  },

  connectCmdr(state) {
    state.cmdr = state.selectedCmdr
  },

  setShoppingList(state, list) {
    state.shoppingList = list
  },

  setBlueprintsAll(state, blueprints) {
    state.blueprintsAll = blueprints
  },

  setMaterialsInventory(state, materials) {
    state.materialsInventory = materials
  },

  setMissingMaterials(state, materials) {
    state.missingMaterials = materials
  },

  addError(state, error) {
    state.errors.push(error)
  },
}

export const actions = {
  getMissingMaterials({ commit, state }) {
    const materialsNeeded = {}
    state.shoppingList.forEach((item) => {
      state.blueprintsAll[item.Blueprint.BlueprintName][
        item.Blueprint.Grade ? item.Blueprint.Grade : 'other'
      ].Ingredients.forEach((ingredient) => {
        if (materialsNeeded[ingredient.Entry.Data.Name] > 0) {
          materialsNeeded[ingredient.Entry.Data.Name] +=
            ingredient.Size * item.Count
        } else {
          materialsNeeded[ingredient.Entry.Data.Name] =
            ingredient.Size * item.Count
        }
      })
    })

    const shoppingListMaterials = []
    Object.keys(materialsNeeded).forEach((material) => {
      if (
        !state.materialsInventory[material] ||
        state.materialsInventory[material].Count < materialsNeeded[material]
      ) {
        const count = state.materialsInventory[material]
          ? state.materialsInventory[material].Count
          : 0
        shoppingListMaterials.push({
          Name: material,
          Count: (count - materialsNeeded[material]) * -1,
        })
      }
    })
    commit('setMissingMaterials', shoppingListMaterials)
  },

  async fetchBlueprints({ commit, state }) {
    try {
      const blueprints = await fetch('http://localhost:44405/blueprints', {
        method: 'GET',
      }).then((blueprints) => blueprints.json())

      const blueprintsList = {}
      blueprints.forEach((blueprint) => {
        if (blueprint.Type !== 'Unlock') {
          if (!blueprintsList[blueprint.BlueprintName]) {
            blueprintsList[blueprint.BlueprintName] = {}
          }
          blueprintsList[blueprint.BlueprintName][
            blueprint.Grade ? blueprint.Grade : 'other'
          ] = blueprint
        }
      })

      commit('setBlueprintsAll', blueprintsList)
    } catch (error) {
      commit('addError', error)
    }
  },

  async fetchCmdrInventory({ commit, state }) {
    try {
      const materials = await fetch(
        `http://localhost:44405/${state.cmdr}/materials`,
        {
          method: 'GET',
        }
      ).then((materials) => materials.json())

      const data = await fetch(`http://localhost:44405/${state.cmdr}/data`, {
        method: 'GET',
      }).then((data) => data.json())

      const inventory = {}

      materials.forEach((item) => {
        inventory[item.Name] = item
      })
      data.forEach((item) => {
        inventory[item.Name] = item
      })

      commit('setMissingMaterials', inventory)
    } catch (error) {
      commit('addError', error)
    }
  },

  async fetchShoppingList({ commit, state }) {
    try {
      const list = await fetch(
        `http://localhost:44405/${state.cmdr}/shopping-list`,
        {
          method: 'GET',
        }
      ).then((list) => list.json())
      commit('setShoppingList', list)
    } catch (error) {
      commit('addError', error)
    }
  },

  async fetchCmdrs({ commit }) {
    try {
      const cmdrs = await fetch('http://localhost:44405/commanders', {
        method: 'GET',
      }).then((cmdrs) => cmdrs.json())

      commit('setCmdrsAvailable', cmdrs)

      if (cmdrs.length === 1) {
        commit('setCmdr', cmdrs[0])
      }
    } catch (error) {
      commit('addError', error)
    }
  },
}
