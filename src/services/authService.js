import apiClient from "./apiClient"
import {provide, ref} from "vue"
import profile from "../store/profile"

export default function useAuth() {
    const authErrors = ref('')

    provide('PROFILE', profile)

    const doLogin = async (credentials) => {
        await apiClient.get('/api/csrf-cookie')
        let loginResponse = await apiClient.post('/api/login', credentials)
        if (loginResponse.data.success) {
            localStorage.setItem('isLoggedIn', 'true')
            let profileData = loginResponse.data.data
            profile.storeProfile(profileData)
        } else {
            localStorage.setItem('isLoggedIn', 'false')
        }
    }

    const doLogout = async () => {
        let response = await apiClient.post('/api/logout')
        if (response.data.success) {
            profile.clearProfile()
            localStorage.setItem('isLoggedIn', 'false');
        }
    }

    return {
        doLogin,
        doLogout,
        authErrors
    }
}