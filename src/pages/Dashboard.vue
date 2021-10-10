<template>
  <AuthLayout>
    <h1>Dashboard</h1>
    <p>You are logged in</p>
    <h2>Secrets</h2>
    <ul>
      <template v-for="secret in secrets">
        <li>{{ secret.name }}</li>
      </template>
    </ul>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from "../components/layout/AuthLayout.vue"
import {onMounted} from "vue"
import useSecrets from "../services/secretsService"

const {secrets, getSecrets} = useSecrets()

onMounted(getSecrets)
</script>