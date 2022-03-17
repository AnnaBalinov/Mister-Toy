import { toyService } from '../../services/toy.service.js'

export default {
  state: {
    toys: null,
    filterBy: null,
    isLoading: false,
  },
  getters: {
    // isLoading(state) {
    //   return state.isLoading
    // },
    getToys(state) {
      return state.toys;
    },
    // toysToShow(state) {
    //   // console.log(state.filterBy)
    //   var filteredToys = state.toys
    //   if (state.filterBy.isInStock) {
    //     filteredToys = filteredToys.filter(toy => toy.inStock)
    //   }
    //   if (state.filterBy.labels.length) {
    //     filteredToys = filteredToys.filter((toy) => {
    //       // ["Doll", "Battery Powered", "Baby"]    ["Battery Powered", "Baby"]
    //       return toy.labels.some((label) => state.filterBy.labels.includes(label));
    //     });
    //   }
    //   if (!state.filterBy.name) return filteredToys
    //   else {
    //     const regexTxt = new RegExp(state.filterBy.name, 'i')
    //     return filteredToys.filter(toy =>
    //       regexTxt.test(toy.name))
    //   }
    // },

  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    },
    setFilter(state, {filterBy}) {
      state.filterBy = filterBy;
    },
    removeToy(state, { id }) {
      // console.log('mutations - id', id)
      const idx = state.toys.findIndex((toy) => toy._id === id)
      state.toys.splice(idx, 1)
    },
    saveToy(state, { toy }) {
      const idx = state.toys.findIndex((currToy) => currToy._id === toy._id)
      if (idx !== -1) state.toys.splice(idx, 1, toy)
      else state.toys.push(toy)
    },
  },
  actions: {
    loadToys({commit, state}) {
      return toyService.query(state.filterBy)
        .then(toys => {
          // console.log('toys:', toys)
          commit({ type: 'setToys', toys })
        })
    },
    removeToy({ commit }, { id }) {
      // console.log('action - id', id)
      toyService.remove(id).then(() => {
        commit({ type: 'removeToy', id })
      })
    },
    saveToy({ commit }, { toy }) {
      toyService.save(toy).then((toy) => {
        commit({ type: 'saveToy', toy })
      })
    },
    filter({commit, dispatch}, {filterBy}) {
      commit({type: 'setFilter', filterBy});
      dispatch({type: 'loadToys'});
    },
  },
}
