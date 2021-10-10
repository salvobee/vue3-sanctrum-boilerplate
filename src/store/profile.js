import {reactive, readonly} from "vue";

const state = reactive({
    profile: null
})

const getProfile = async () => {
    return state.profile
}

const storeProfile = (profileData) => {
    state.profile = profileData
}

const clearProfile = () => {
    state.profile = null
}

export default {
    state: readonly(state),
    getProfile,
    storeProfile,
    clearProfile
}