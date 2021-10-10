<template>
  <button @click="logout">
    <slot></slot>
  </button>
</template>

<script setup>
import useAuth from "../../services/authService"
import {useRouter} from "vue-router"

const {doLogout} = useAuth()

const router = useRouter()

const logout = async () => {
  await doLogout()
  await router.push('/login')
}
</script>