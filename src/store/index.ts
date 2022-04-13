import { createStore } from 'vuex'
import { firstLabStore } from './modules/firstLab';
import {secondLabStore} from "@/store/modules/secondLab";

export default createStore({
  state() {
      return {
        loading: false,
        error: null,
      }
  },
  mutations: {
    startLoading(state: any) {
      state.loading = true
    },
    endLoading(state: any) {
      state.loading = false
    },
    setError(state: any, error: string) {
      state.error = error
    },
  },
  getters: {
    loading(state: any) {
      return state.loading
    },
    error(state: any) {
      return state.error
    }
  },
  actions: {
  },
  modules: {
    firstLab: firstLabStore,
    secondLab: secondLabStore,
  }
})
