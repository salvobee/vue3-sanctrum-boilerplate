<template>
  <AuthLayout>
    {{ userProfile }}
  </AuthLayout>
</template>

<script setup>
import {onMounted} from "vue"
import AuthLayout from "../components/layout/AuthLayout.vue"
import useProfile from "../services/profileService";

const {userProfile, getProfile} = useProfile()

onMounted(getProfile)

</script>
