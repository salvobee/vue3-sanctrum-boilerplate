import axios from 'axios'

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
});

apiClient.interceptors.response.use(response => response, error => {
    if (error.response) {
        // Request made and server responded
        if (error.response.status === 401 || error.response.status === 419) {
            localStorage.setItem('isLoggedIn', 'false')
            window.location.href = "login"
        }
    } else if (error.request) {
        // The request was made but no response was received
    } else {
        // Something happened in setting up the request that triggered an Error
    }
    return error
})

export default apiClient