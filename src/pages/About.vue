<template>
  <GuestLayout>
    <h1>About</h1>
    <p>This page does not require auth</p>
    <router-link to="/login">Login</router-link>
    to see secrets
  </GuestLayout>
</template>

<script setup>
import GuestLayout from "../components/layout/GuestLayout.vue"</script>