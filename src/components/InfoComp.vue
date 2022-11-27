<template>
  <v-card flat color="transparent" class="my-5 text-left" max-width="60vw">
    <v-card-title class="headline font-weight-light">{{ props.proj.title }}</v-card-title>
    <v-divider></v-divider>
    <v-card-text class="white text--primary">{{ props.proj.desc }}</v-card-text>
    <v-chip v-for="(tech, i) in props.proj.techs" :key="i" class="ml-4"
      :color="chips[tech.toLowerCase() as keyof Chip].color"
      :prepend-icon="chips[tech.toLowerCase() as keyof Chip].icon">
      {{ tech }}
    </v-chip>
    <v-card-actions>
      <v-spacer />
      <v-btn v-if="props.proj.code_link" icon="mdi-xml" color="secondary" :href="props.proj.code_link" target="_blank">
      </v-btn>
      <v-btn :icon="props.proj.ext_link ? 'mdi-web' : 'mdi-chevron-right'" color="primary" :href="props.proj.ext_link"
        target="_blank" />
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Project } from './WorkComp.vue';

export interface ChipInfo {
  color: string,
  icon: string
}

export interface Chip {
  javascript: ChipInfo,
  nodejs: ChipInfo,
  mongodb: ChipInfo,
  mysql: ChipInfo,
  expressjs: ChipInfo,
  p5js: ChipInfo,
  apis: ChipInfo,
  vue: ChipInfo,
  vuetify: ChipInfo,
  react: ChipInfo,
  python: ChipInfo
}

const props = defineProps<{ proj: Project }>();

const chips = ref<Chip>({
  javascript: { color: 'amber', icon: 'mdi-language-javascript' },
  nodejs: { color: 'light-green', icon: 'mdi-nodejs' },
  mongodb: { color: 'green', icon: 'mdi-leaf' },
  mysql: { color: 'gray', icon: 'mdi-database' },
  expressjs: { color: 'blue-grey', icon: 'mdi-language-javascript' },
  p5js: { color: 'pink', icon: 'mdi-language-javascript' },
  apis: { color: 'cyan', icon: 'mdi-api' },
  vue: { color: 'green', icon: 'mdi-vuejs' },
  vuetify: { color: 'light-blue', icon: 'mdi-vuetify' },
  react: { color: 'light-blue', icon: 'mdi-react' },
  python: { color: 'cyan', icon: 'mdi-language-python' }
});
</script>