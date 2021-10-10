<template>
  <GuestLayout>
    <h1>Login</h1>
    <div>
      <LoginForm/>
    </div>
    <router-link to="/about">About</router-link>
  </GuestLayout>
</template>

<script setup>
import GuestLayout from "../components/layout/GuestLayout.vue"
import LoginForm from "../components/auth/LoginForm.vue"</script>