import axios from 'axios';
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
} from "./types";

const api = axios.create({
    baseURL: '/api'
})
// Register User
export const registerUser = (userData, history) => dispatch => {
    api
        .post("/register", userData)
        .then(res => {history.push("/users/login")
         window.alert(`Rejestracja powiodła się!`)})
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
// Get all users
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

// Update user Admin site
export const updateUserByIdA = (id, payload) => dispatch => {
    api
        .put(`/userA/${id}`, payload)
        .then(res => window.alert(`Zaaktualizowano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}
// Update user password
export const updateUserEmail = (id, payload) => dispatch => {
    api
        .put(`/useremail/${id}`, payload)
        .then(res => window.alert(`Zaaktualizowano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}
// Update user password
export const updateUserPassword = (id, payload) => dispatch => {
    api
        .put(`/userpassword/${id}`, payload)
        .then(res => window.alert(`Zaaktualizowano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}
// Delete user by id
export const deleteUserById = id => api.delete(`/user/${id}`)

// Get user by id
export const getUserById = id => api.get(`/user/${id}`)

// Allotment
export const insertAllotment = (allotmentData, history) => dispatch => {
    api
        .post("/allotment", allotmentData)
        .then(res => window.alert(`Dodano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

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

export const getAllAllotments = () => api.get(`/allotments`)
export const deleteAllotmentById = id => api.delete(`/allotment/${id}`)
export const getAllotmentById = id => api.get(`/allotment/${id}`)
export const getAllotmentByNumber = id => api.get(`/allotment/${id}`)

// Message
export const insertMessage = (messageData, history) => dispatch => {
    api
        .post("/message", messageData)
        .then(res => window.alert(`Wiadomość została wysłana`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};
export const updateMessageById = (id, payload) => dispatch => {
    api
        .put(`/message/${id}`, payload)
        .then(res => window.alert(`Zaaktualizowano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}
export const getAllMessages = () => api.get(`/messages`)
export const deleteMessageById = id => api.delete(`/message/${id}`)
export const getMessageById = id => api.get(`/message/${id}`)

// Notice Board
export const insertNoticeboard = (noticeboardData, history) => dispatch => {
    api
        .post("/noticeboard", noticeboardData)
        .then(res => window.alert(`Dodano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};
export const updateNoticeboardById = (id, payload) => dispatch => {
    api
        .put(`/noticeboard/${id}`, payload)
        .then(res => window.alert(`Zaaktualizowano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}
export const getAllNoticeboards = () => api.get(`/noticeboards`)
export const deleteNoticeboardById = id => api.delete(`/noticeboard/${id}`)
export const getNoticeboardById = id => api.get(`/noticeboard/${id}`)

// Forum
export const insertForum = (forumData, history) => dispatch => {
    api
        .post("/forum", forumData)
        .then(res => window.alert(`Dodano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};
export const updateForumById = (id, payload) => dispatch => {
    api
        .put(`/forum/${id}`, payload)
        .then(res => window.alert(`Zaaktualizowano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}
export const getAllForums = () => api.get(`/forums`)
export const deleteForumById = id => api.delete(`/forum/${id}`)
export const getForumById = id => api.get(`/forum/${id}`)

// Comment
export const insertComment = (commentData, history) => dispatch => {
    api
        .post("/comment", commentData)
        .then(res => window.alert(`Dodano komentarz!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};
export const updateCommentById = (id, payload) => dispatch => {
    api
        .put(`/comment/${id}`, payload)
        .then(res => window.alert(`Zaaktualizowano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}
export const getAllComments = () => api.get(`/comments`)
export const deleteCommentById = id => api.delete(`/comment/${id}`)
export const getCommentById = id => api.get(`/comment/${id}`)

// Finance
export const insertFinance = (financeData, history) => dispatch => {
    api
        .post("/finance", financeData)
        .then(res => window.alert(`Dodano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};export const insertFinanceFromBuy = (financeData, history) => dispatch => {
    api
        .post("/finance", financeData)
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};
export const insertAllFinance = (financeData, history) => dispatch => {
    api
        .post("/finance", financeData)
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

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

export const updatePaymentdetailById = (id, payload) => dispatch => {
    api
        .put(`/paymentdetail/${id}`, payload)
        .then(res => window.alert(`Zaaktualizowano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}
export const getPaymentdetailById = id => api.get(`/paymentdetail/${id}`)

// Management
export const insertManagement = (managementData, history) => dispatch => {
    api
        .post("/management", managementData)
        .then(res => window.alert(`Dodano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};
export const updateManagementById = (id, payload) => dispatch => {
    api
        .put(`/management/${id}`, payload)
        .then(res => window.alert(`Zaaktualizowano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}
export const getAllManagements = () => api.get(`/managements`)
export const deleteManagementById = id => api.delete(`/management/${id}`)
export const getManagementById = id => api.get(`/management/${id}`)

// Announcement
export const insertAnnouncement = (announcementData, history) => dispatch => {
    api
        .post("/announcement", announcementData)
        .then(res => window.alert(`Dodano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};
export const updateAnnouncementById = (id, payload) => dispatch => {
    api
        .put(`/announcement/${id}`, payload)
        .then(res => window.alert(`Zaaktualizowano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}
export const getAllAnnouncements = () => api.get(`/announcements`)
export const deleteAnnouncementById = id => api.delete(`/announcement/${id}`)
export const getAnnouncementById = id => api.get(`/announcement/${id}`)

// Announcement
export const insertImage = (imageData, history) => dispatch => {
    api
        .post("/category", imageData)
        .then(res => window.alert(`Dodano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                message: err.response.data.errors,
                // found: true,
                // payload: err.response.data
            })
        );
};
// Act
export const insertAct = (actData, history) => dispatch => {
    api
        .post("/act", actData)
        .then(res => window.alert(`Dodano pomyślnie!`))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                message: err.response.data.errors,
            })
        );
};
export const getAllActs = () => api.get(`/acts`)
export const deleteActById = id => api.delete(`/act/${id}`)
const apis = {
    insertImage,
    insertAct,
    getAllActs,
    deleteActById,
    
    registerUser,
    loginUser,
    setCurrentUser,
    setUserLoading,
    logoutUser,
    updateUserByIdA,
    updateUserEmail,

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

    insertNoticeboard,
    getAllNoticeboards,
    updateNoticeboardById,
    deleteNoticeboardById,
    getNoticeboardById,

    insertForum,
    getAllForums,
    updateForumById,
    deleteForumById,
    getForumById,


    insertFinance,
    insertFinanceFromBuy,
    insertAllFinance,
    getAllFinances,
    updateFinanceById,
    deleteFinanceById,
    getFinanceById,

    updatePaymentdetailById,
    getPaymentdetailById,

    insertComment,
    getAllComments,
    updateCommentById,
    deleteCommentById,
    getCommentById,

    insertManagement,
    getAllManagements,
    updateManagementById,
    deleteManagementById,
    getManagementById,

    insertAnnouncement,
    getAllAnnouncements,
    updateAnnouncementById,
    deleteAnnouncementById,
    getAnnouncementById
}

export default apis