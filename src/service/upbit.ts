import { v4 as uuidv4 } from 'uuid'
import { sign } from 'jsonwebtoken'
import axios from 'axios'

type AuthPayload = {
  access_key: string
  nonce: string
  query_hash: string
  query_hash_alg: 'HS256' | 'SHA512'
}

const generatePayload: () => string = (hash?: string) => {
  const authPayload: AuthPayload = {
    access_key: process.env.ACCESS_KEY,
    nonce: uuidv4(),
    query_hash: hash || null,
    query_hash_alg: 'HS256'
  }

  return sign(authPayload, process.env.SECRET_KEY)
}

axios.defaults.baseURL = 'https://api.upbit.com/v1'

axios.interceptors.request.use((value) => {
  value.headers.Authorization = 'Bearer ' + generatePayload()
  return value
})

export const getAccountPrice = async () => {
  try {
    const { data } = await axios.get('/accounts')
    return data
  } catch (error) {
    console.error(error)
  }
}
