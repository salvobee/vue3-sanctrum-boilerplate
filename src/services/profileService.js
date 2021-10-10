import apiClient from "./apiClient"
import {ref} from "vue";

export default function useProfile() {
    const userProfile = ref(null)

    const getProfile = async () => {
        apiClient.get('/api/profile')
            .then(response => { if (response.data) userProfile.value = response.data.data })
    }

    return {
        userProfile,
        getProfile
    }
}