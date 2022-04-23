import { DogService } from '@/api/dogService'

const transformDogsObject = (obj: any) => {
  const res = []
  for (const dog in obj) {
    res.push({
      breed: dog,
      underBreeds: obj[dog],
    })
  }
  return res
}

export const secondLabStore = {
  namespaced: true,
  state() {
    return {
      dogs: null,
      selected: [],
    }
  },
  mutations: {
    setDogList(state: any, dogs: any) {
      state.dogs = dogs
    },
    addRemoveSelected(state: any, dog: any) {
      //   console.log('Dog', dog)
      const index = state.selected.findIndex((item: any) => item.breed === dog.breed)
      //   console.log('index', index)
      if (index !== -1) {
        state.selected.splice(index, 1)
      } else {
        state.selected.push(dog)
      }
    },
    // removeSelected(state: any, dog: any) {
    //   state.selected.filter((item: any) => item.breed !== dog.breed)
    // },
  },
  actions: {
    async getDogList(ctx: any) {
      ctx.commit('startLoading', null, { root: true })
      const res = await DogService.getAllDogs()
      // transformDogsObject(res.data.message);
      ctx.commit('setDogList', transformDogsObject(res.data.message))
      ctx.commit('endLoading', null, { root: true })
    },
  },
  getters: {
    dogs(state: any) {
      return state.dogs
    },
    selected(state: any) {
      return state.selected
    },
  },
}
