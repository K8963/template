import { defineStore } from 'pinia'
export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    name: 'admin',
  }),
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    async insertPost(data: string) {
      data = `123${data}456`
      this.name = data
    },
  },
})
