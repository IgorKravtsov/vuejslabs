import {DogService} from "@/api/dogService";

const transformDogsObject = (obj: any) => {
    const res = [];
    for (const dog in obj) {
        res.push({
            breed: dog,
            underBreeds: obj[dog]
        });
    }
    return res;
}

export const secondLabStore = {
    namespaced: true,
    state() {
        return {
            dogs: null
        }
    },
    mutations: {
      setDogList(state: any, dogs: any) {
          state.dogs = dogs
      }
    },
    actions: {
        async getDogList(ctx: any) {
            ctx.commit('startLoading', null, { root: true })
            const res = await DogService.getAllDogs();
            // transformDogsObject(res.data.message);
            ctx.commit('setDogList', transformDogsObject(res.data.message))
            ctx.commit('endLoading', null, { root: true })
        }
    },
    getters: {
        dogs(state: any) {
            return state.dogs
        },
    },

}