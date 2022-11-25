<template>
  <v-app id="main">
    <v-main>
      <TopBar />
      <Home />
      <Work id="projects" />
      <Files id="files" />
      <v-footer color="transparent" border>
        Leinad
        <v-spacer />
        <div id="copyright">&copy;{{(new Date()).getFullYear()}} — <strong>Daniel Bass</strong></div>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Home from '@/components/Home.vue';
import Work from '@/components/Work.vue';
import TopBar from '@/components/TopBar.vue';
import Files from '@/components/Files.vue';

export default {
  components: {
    Home, Work, TopBar, Files
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>