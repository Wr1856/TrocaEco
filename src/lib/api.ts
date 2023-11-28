import axios from "axios"

export const api = axios.create({
  baseURL: 'https://troca-eco.vercel.app/api'
})
