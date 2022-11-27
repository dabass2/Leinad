<template>
  <v-container class="py-15">
    <v-responsive>
      <div class="text-center text-h3 font-weight-thin">Assorted Projects &amp; Stuff</div>
      <div class="font-weight-light subtitle-2 text-center pt-2">Not all of the small random things I make can be
        displayed in their own section nor do I really want to. So I've put them inside of here with their own
        mini-descriptions and links.</div>
      <v-divider class="py-4" />
      <v-expansion-panels>
        <v-expansion-panel v-for="(item, i) in subProjs" :key="i" :title="item.title">
          <v-expansion-panel-text>
            <div>{{ item.desc }}</div>
            <v-card-actions>
              <v-chip v-for="(tech, i) in item.techs" :key="i" :color="chips[tech.toLowerCase() as keyof Chip].color"
                :prepend-icon="chips[tech.toLowerCase() as keyof Chip].icon">{{ tech }}</v-chip>
              <v-spacer />
              <v-btn v-if="item.code_link" icon="mdi-xml" color="secondary" :href="item.code_link" target="_blank">
              </v-btn>
              <v-btn v-if="item.ext_link" icon="mdi-web" color="primary" :href="item.ext_link" target="_blank"></v-btn>
            </v-card-actions>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Project } from './WorkComp.vue';
import { Chip } from './InfoComp.vue';

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

const subProjs = ref<Array<Project>>(
  [
    {
      title: 'Edward',
      desc: 'Made this in React to learn. Press the button to get an image of my cat, Edward.',
      ext_color: 'primary',
      info_color: 'secondary',
      code_link: "https://github.com/dabass2/edward",
      ext_link: "https://leinad.dev/edward",
      techs: ["React"]
    },
    {
      title: 'Bird',
      desc: 'I am unsure why I named this bird. Words come down the screen, you have to type them before they hit the bottom.',
      ext_color: 'primary',
      info_color: 'secondary',
      code_link: "https://github.com/dabass2/bird",
      ext_link: "https://leinad.dev/bird",
      techs: ["Javascript", "p5js"]
    },
    {
      title: 'Advent',
      desc: 'I do Advent of Code every year. And by "do" I mean I struggle through a few until I give up.',
      ext_color: 'primary',
      info_color: 'secondary',
      ext_link: 'https://adventofcode.com/',
      code_link: 'https://github.com/dabass2/advent',
      techs: ['Python']
    },
    {
      title: 'WatchPls',
      desc: 'WatchPls was a spirtiual successor to rabb.it. It allowed you to share your screen and watch anything along with your friends. It is gone now.',
      ext_color: 'primary',
      info_color: 'secondary',
      ext_link: 'https://watchpls.me',
      techs: ['Javascript', 'Vue', 'Vuetify']
    },
    {
      title: 'Vizu',
      desc: 'I like making visualizations for things. Only thing is, I am lazy so I haven\'t made many.',
      ext_color: 'primary',
      info_color: 'secondary',
      ext_link: 'https://leinad.dev/assort/vizu',
      techs: ['Javascript', 'p5js']
    }
  ]
);
</script>