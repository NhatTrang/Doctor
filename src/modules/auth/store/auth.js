import { defineStore } from 'pinia'
import axios from "@/core/axios"
import api from '@/api'
export const useAuthStore = defineStore('auth', {
  actions: {
    async Login(entry) {
      let response = await axios({
        method: "POST",
        url: api.Login,
        data: entry,
      });
      return response.data;
    },
  },
})