import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
// let requestInterceptorId: number | null = null

// export const registerInterceptors = () => {
//     requestInterceptorId = axios.interceptors.request.use(
//         (config) => {
//             const userStore = useUserStore()
//             const currentUser = userStore.getCurrentUser()
//             const token = currentUser?.token
//             if (token) {
//                 config.headers['Authorization'] = `Bearer ${token}`
//             }
//             return config
//         },
//         (error) => {
//             return Promise.reject(error)
//         }
//     )
// }

const axiosDefault = axios.create({

})

export { axiosDefault };

