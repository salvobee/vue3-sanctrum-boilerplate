import apiClient from "./apiClient";
import {ref} from "vue";

export default function useSecrets() {
    const secrets = ref([]);

    const getSecrets = async () => {
        apiClient.get('/api/secrets')
            .then(response => {
                if (response.data) secrets.value = response.data.data
            })
    }

    return {
        secrets,
        getSecrets
    }
}