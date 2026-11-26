import { ENV } from '@/constants'
import axios from 'axios'

const serverApi = axios.create({
	baseURL: ENV.SERVER_API_URL,
})

serverApi.interceptors.response.use(
	(response) => {
		return response.data
	},
	(error) => Promise.reject(error),
)

const nextjsApi = axios.create({
	baseURL: ENV.NEXTJS_API_URL,
})

nextjsApi.interceptors.response.use(
	(response) => {
		return response.data
	},
	(error) => Promise.reject(error),
)

export { serverApi, nextjsApi }
