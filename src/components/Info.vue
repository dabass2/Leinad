<template>
  <v-container>
    <v-card flat color="transparent">
      <v-card-title>{{props.title}}</v-card-title>
      <v-card-text>{{props.desc}}</v-card-text>
      <v-chip
        v-for="(tech, i) in props.techs"
        :key="i"
        class="ml-4"
        :color="chips[tech.toLowerCase()].color"
        :prepend-icon="chips[tech.toLowerCase()].icon"
      >
        {{ tech }}
      </v-chip>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="subDialog = true">Images</v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog v-model="subDialog">
      <v-carousel show-arrows="hover" hide-delimiters progress="secondary">
        <v-carousel-item
          v-for="(image_url, i) in images"
          :key="i"
          :src="image_url"
        ></v-carousel-item>
      </v-carousel>
      <v-btn @click="subDialog = false">Close</v-btn>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface ChipInfo {
  color: string,
  icon: string
}

interface Chip {
  javascript: ChipInfo,
  nodejs: ChipInfo,
  mongodb: ChipInfo,
  mysql: ChipInfo,
  expressjs: ChipInfo,
  p5js: ChipInfo,
  apis: ChipInfo,
  vue: ChipInfo,
  vuetify: ChipInfo
}

const subDialog = ref<boolean>(false);

const chips = ref<Chip>({
  javascript: {color: 'amber', icon: 'mdi-language-javascript'},
  nodejs: {color: 'light-green', icon: 'mdi-nodejs'},
  mongodb: {color: 'green', icon: 'mdi-leaf'},
  mysql: {color: 'gray', icon: 'mdi-database'},
  expressjs: {color: 'blue-grey', icon: 'mdi-language-javascript'},
  p5js: {color: 'pink', icon: 'mdi-language-javascript'},
  apis: {color: 'cyan', icon: 'mdi-api'},
  vue: {color: 'green', icon: 'mdi-vuejs'},
  vuetify: {color: 'light-blue', icon: 'mdi-vuetify'}
});

const props = defineProps({
  title: String,
  desc: String,
  images: Array<String>,
  techs: Array<String>
});
</script>