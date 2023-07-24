import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({ token: null }),
  getters: {
    getCredentials: (state) => state.token,
  },
  actions: {
    isLoggedIn() {
      return this.token !== null;
    },
    login(username, password) {
      const encoder = new TextEncoder();
      const data = encoder.encode(`${username}:${password}`);
      const key = window.crypto.subtle.generateKey(
        {
          name: 'AES-GCM',
          length: 256,
        },
        true,
        ['encrypt', 'decrypt']
      );
      const iv = window.crypto.getRandomValues(new Uint8Array(12));
      const encrypted = window.crypto.subtle.encrypt(
        {
          name: 'AES-GCM',
          iv,
        },
        key,
        data
      );
      this.$patch({ token: { encrypted, iv }});
    }
  } // actions
});
