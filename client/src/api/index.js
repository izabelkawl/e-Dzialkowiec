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
export const registerUser = (userData, history) => dispatch => {
    api
        .post("/register", userData)
        .then(res => history.push("/users/login"))
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

// Update user
export const updateUserById = (id, payload) => dispatch => {
    api
        .put(`/user/${id}`, payload)
        .then(res => window.alert(`Zaaktualizowano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

export const deleteUserById = id => api.delete(`/user/${id}`)
export const getUserById = id => api.get(`/user/${id}`)

// Insert Allotment
export const insertAllotment = (allotmentData, history) => dispatch => {
    api
        .post("/allotment", allotmentData)
        .then(res => history.push("/allotments/list"))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};
// Update user
export const updateAllotmentById = (id, payload) => dispatch => {
    api
        .put(`/allotment/${id}`, payload)
        .then(res => window.alert(`Zaaktualizowano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}
// Update user
export const buyAllotmentById = (id, payload) => dispatch => {
    api
        .put(`/allotment/${id}`, payload)
        .then(res => window.alert(`Właśnie kupiłeś działkę!\nSprawdź zakładkę Zobowiązania`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}
// export const insertAllotment = payload => api.post(`/allotment`, payload)
export const getAllAllotments = () => api.get(`/allotments`)
// export const updateAllotmentById = (id, payload) => api.put(`/allotment/${id}`, payload)
export const deleteAllotmentById = id => api.delete(`/allotment/${id}`)
export const getAllotmentById = id => api.get(`/allotment/${id}`)
export const getAllotmentByNumber = id => api.get(`/allotment/${id}`)

export const insertMessage = payload => api.post(`/message`, payload)
export const getAllMessages = () => api.get(`/messages`)
export const updateMessageById = (id, payload) => api.put(`/message/${id}`, payload)
export const deleteMessageById = id => api.delete(`/message/${id}`)
export const getMessageById = id => api.get(`/message/${id}`)

export const insertTable = payload => api.post(`/table`, payload)
export const getAllTables = () => api.get(`/tables`)
export const updateTableById = (id, payload) => api.put(`/table/${id}`, payload)
export const deleteTableById = id => api.delete(`/table/${id}`)
export const getTableById = id => api.get(`/table/${id}`)

export const insertForum = payload => api.post(`/forum`, payload)
export const getAllForums = () => api.get(`/forums`)
export const updateForumById = (id, payload) => api.put(`/forum/${id}`, payload)
export const deleteForumById = id => api.delete(`/forum/${id}`)
export const getForumById = id => api.get(`/forum/${id}`)

export const insertComment = payload => api.post(`/comment`, payload)
export const getAllComments = () => api.get(`/comments`)
export const updateCommentById = (id, payload) => api.put(`/comment/${id}`, payload)
export const deleteCommentById = id => api.delete(`/comment/${id}`)
export const getCommentById = id => api.get(`/comment/${id}`)


// Insert FInance
export const insertFinance = (allotmentData, history) => dispatch => {
    api
        .post("/finance", allotmentData)
        .then(res => window.alert(`Dodano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Update finance
export const updateFinanceById = (id, payload) => dispatch => {
    api
        .put(`/finance/${id}`, payload)
        .then(res => window.alert(`Zaaktualizowano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}
export const getAllFinances = () => api.get(`/finances`)
export const deleteFinanceById = id => api.delete(`/finance/${id}`)
export const getFinanceById = id => api.get(`/finance/${id}`)

export const insertImage = payload => api.post(`/category`, payload)
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

    insertAllotment,
    getAllAllotments,
    updateAllotmentById,
    buyAllotmentById,
    deleteAllotmentById,
    getAllotmentById,
    getAllotmentByNumber,

    insertMessage,
    getAllMessages,
    updateMessageById,
    deleteMessageById,
    getMessageById,

    insertTable,
    getAllTables,
    updateTableById,
    deleteTableById,
    getTableById,

    insertForum,
    getAllForums,
    updateForumById,
    deleteForumById,
    getForumById,

    insertFinance,
    getAllFinances,
    updateFinanceById,
    deleteFinanceById,
    getFinanceById,

    insertComment,
    getAllComments,
    updateCommentById,
    deleteCommentById,
    getCommentById,

    insertImage
}

export default apis