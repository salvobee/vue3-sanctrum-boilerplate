<template>
  <div v-if="authUser">
    <slot>{{ authUser.name }}</slot>
  </div>
  <LogoutButton>Logout</LogoutButton>
</template>

<script setup>
import LogoutButton from "./LogoutButton.vue"
import {computed, provide} from "vue"
import profile from "../../store/profile"

provide('PROFILE', profile)

const authUser = computed(() => profile.state.profile)
</script>