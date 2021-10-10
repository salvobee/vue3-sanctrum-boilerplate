<template>
  <ul>
    <li>
      <router-link to="/">Dashboard</router-link>
    </li>
    <li>
      <router-link to="/profile">Profile</router-link>
    </li>
    <li>
      <router-link to="/about">About</router-link>
    </li>
    <li>
      <AuthCard></AuthCard>
    </li>
  </ul>
</template>

<script setup>
import AuthCard from "../auth/AuthCard.vue"</script>