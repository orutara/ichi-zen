import { defineStore } from "pinia"

export const useModalStore = defineStore("modalStore", {
  state: () => ({
      isOpen: false
  }),
  // getters: {
  //   isOpen: (state) => state.isOpen
  // },
  actions: {
    toggleOpenModal() {
      this.isOpen = !this.isOpen
      console.log(this.isOpen)
    }
  }
});