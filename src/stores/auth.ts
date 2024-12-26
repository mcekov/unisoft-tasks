import router from '@/router';
import { defineStore } from 'pinia';

interface State {
  user: {} | null;
  error: string | null;
}

export const useAuthStore = defineStore('auth-store', {
  state: (): State => ({
    user: null,
    error: null,
  }),
  actions: {
    signin(username: string, password: string) {
      if (username == 'admin' && password == 'password') {
        this.user = { username, interests: [], password };

        router.push('/');
      } else {
        this.error = 'Invalid username password combination';
      }
    },
    logout() {
      this.user = null;
      this.error = null;
      router.push('/signin');
    },
    resetError() {
      this.error = null;
    },
  },
  getters: {
    isAuthenticated(state) {
      return this.user !== null;
    },
  },
  persist: true,
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useErrorStore, import.meta.hot));
}
