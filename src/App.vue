<template>
  <v-app id="main">
    <v-main>
      <TopBar />
      <HomeComp />
      <WorkComp id="projects" />
      <AssortComp id="assort" />
      <v-footer color="transparent" border>
        Leinad
        <v-spacer />
        <div id="copyright">&copy;{{ (new Date()).getFullYear() }} — <strong>Daniel Bass</strong></div>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HomeComp from '@/components/HomeComp.vue';
import WorkComp from '@/components/WorkComp.vue';
import TopBar from '@/components/TopBar.vue';
import AssortComp from './components/AssortComp.vue';
</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #575757;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: black;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>