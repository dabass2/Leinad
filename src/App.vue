<template>
  <v-app id="main">
    <v-main>
      <TopBar />
      <Home />
      <Work id="projects" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Home from '@/components/Home.vue';
import Work from '@/components/Work.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  components: {
    Home, Work, TopBar
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>