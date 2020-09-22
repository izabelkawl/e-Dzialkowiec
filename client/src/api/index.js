import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})

export const insertUser = payload => api.post(`/user`, payload)
export const getAllUsers = () => api.get(`/users`)
export const updateUserById = (id, payload) => api.put(`/user/${id}`, payload)
export const deleteUserById = id => api.delete(`/user/${id}`)
export const getUserById = id => api.get(`/user/${id}`)

export const insertProvider = payload => api.post(`/provider`, payload)
export const getAllProviders = () => api.get(`/providers`)
export const updateProviderById = (id, payload) => api.put(`/provider/${id}`, payload)
export const deleteProviderById = id => api.delete(`/provider/${id}`)
export const getProviderById = id => api.get(`/provider/${id}`)

export const insertProduct = payload => api.post(`/product`, payload)
export const getAllProducts = () => api.get(`/products`)
export const updateProductById = (id, payload) => api.put(`/product/${id}`, payload)
export const deleteProductById = id => api.delete(`/product/${id}`)
export const getProductById = id => api.get(`/product/${id}`)

const apis = {
    insertUser,
    getAllUsers,
    updateUserById,
    deleteUserById,
    getUserById,

    insertProvider,
    getAllProviders,
    updateProviderById,
    deleteProviderById,
    getProviderById,

    insertProduct,
    getAllProducts,
    updateProductById,
    deleteProductById,
    getProductById,
}

export default apis