export const state = () => ({
  startSystem: 'Sol',
  destinations: [],
  jumpRange: 50,
  loopRoute: false,
})

export const mutations = {
  setStartSystem(state, system) {
    state.startSystem = system
  },
  setDestinations(state, destinations) {
    state.destinations = destinations
  },
  setJumpRange(state, range) {
    state.jumpRange = range
  },
  setLoopRoute(state, loop) {
    state.loopRoute = loop
  },
}
