<template>
  <v-container class="text-center pt-0">
    <v-responsive height="100vh" class="align-center">
      <v-row>
        <v-col>
          <div class="text-h1 font-weight-thin">{{ getName() }}</div>
          <div class="text-subtitle-1 font-weight-bold py-2">Software Engineer | Chicago</div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn @click="goTo('projects')" color="primary" variant="flat">
            <v-icon icon="mdi-view-dashboard" size="large" start />
            Projects
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn @click="goTo('assort')" color="secondary" variant="text" border>
            <v-icon icon="mdi-folder-open" size="large" start />
            Assorted
          </v-btn>
        </v-col>
      </v-row>
      <div class="pb-15" />
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const names = ref<Array<string>>(['Daniel', 'Leinad', 'Daniel Bass', 'My Name Jeff', 'Cruz Onby']);

function getName(): string {
  return names.value[Math.floor(Math.random() * names.value.length)];
}

// $vuetify.goTo removed in v3?
function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>
