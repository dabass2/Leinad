<template>
  <v-container class="py-0">
    <v-app-bar elevation="0" :color=theme.current.value.colors.background border>
      <template v-slot:prepend>
        <v-btn icon="mdi-home-circle-outline" @click="goToTop()" />
      </template>
      <template v-slot:append>
        <v-btn icon="mdi-github" href="https://github.com/dabass2" target="_blank"></v-btn>
        <v-btn icon="mdi-linkedin" href="https://www.linkedin.com/in/daniel-bass-16204617b/" target="_blank"></v-btn>
        <v-btn :icon=btnIcon @click="toggleTheme"></v-btn>
      </template>
    </v-app-bar>
  </v-container>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs';
import { ref } from 'vue';

const theme = useTheme()
const btnIcon = ref(theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-brightness-2')

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  btnIcon.value = theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-brightness-2'
}

function goToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>