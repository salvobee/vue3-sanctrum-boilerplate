<template>
  <input v-model="credentials.email" placeholder="email" type="text">
  <input v-model="credentials.password" placeholder="password" type="password">
  <button @click="submitLoginForm">Login</button>

  <template v-if="authErrors">
    {{ authErrors }}
  </template>
</template>

<script setup>
import useAuth from "../../services/authService.js"
import {useRouter} from "vue-router"

const credentials = {
  email: '',
  password: ''
}

const router = useRouter()
const {doLogin, authErrors} = useAuth()

const submitLoginForm = async () => {
  await doLogin(credentials)
  await router.push('/')
}
</script>