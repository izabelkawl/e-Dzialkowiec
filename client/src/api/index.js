import axios from 'axios';
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
} from "./types";

const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})
// Register User
export const registerUser = payload => dispatch => {
    api
        .post(`/register`, payload)
        .then(res => api.push("/login"))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Login - get user token
export const loginUser = payload => dispatch => {
    api
        .post("/login", payload)
        .then(res => {
            // Save to localStorage
            // Set token to localStorage
            const { token } = res.data;
            localStorage.setItem("jwtToken", token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};
// User loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    };
};
// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};

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
    registerUser,
    loginUser,
    setCurrentUser,
    setUserLoading,
    logoutUser,

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