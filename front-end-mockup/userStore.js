import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isLoggedIn: false,
  }),

  actions: {
    setUser(user) {
      this.user = user;
      this.isLoggedIn = !!user;
    },

    logout() {

      this.user = null;
      this.isLoggedIn = false;
    },
  },
});