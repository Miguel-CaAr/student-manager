import { defineStore } from "pinia";

export const useUserStore = defineStore("userStore", {
  id: "userStore",
  state: () => ({
    user: "Empty",
  }),
  actions: {
    updateUser(newUser) {
      this.user = newUser;
    },
  },
});
