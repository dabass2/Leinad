<template>
  <v-container>
    <v-responsive class="d-flex pt-12">
      <div class="font-weight-thin text-h3 text-center">Projects</div>
      <div class="font-weight-light subtitle-2 text-center pt-2">Links to Projects & More Info</div>
      <v-divider class="my-4" />
      <v-row v-for="(item, i) in projects" :key=i align="center" dense>
        <v-col cols="4" justify="center">
          <v-img
            :src=item.img_link
            contain
            max-height="300"
            max-width="350"
          ></v-img>
        </v-col>
        <v-col justify="center" cols="auto">
          <v-card
            flat
            color="transparent"
            class="my-5 text-left"
            max-width="60vw"
          >
            <v-card-title class="headline font-weight-light">{{ item.title }}</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="white text--primary">{{ item.desc }}</v-card-text>
            <v-card-actions>
              <v-icon color="yellow">mdi-language-javascript</v-icon>
              <v-spacer />
              <v-btn
                v-if="item.ext_link"
                icon="mdi-link"
                color="primary"
                :href="`${item.ext_link}`"
                target="_blank"
              />
              <v-btn
                icon="mdi-chevron-right"
                color="secondary"
                @click="dialog = true"
              >
              </v-btn>
              <v-dialog v-model="dialog">
                <Info />
                <v-btn @click="dialog = false">Close</v-btn>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-divider />
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
import Info from '@/components/Info.vue';

interface Project {
  title: String,
  desc: String,
  ext_color: String,
  info_color: String,
  img_link: String,
  ext_link?: String
}

interface WorkData {
  dialog: Boolean
  projects: Array<Project>
}

export default {
  components: {
    Info
  },
  data(): WorkData {
    return {
      dialog: false,
      projects: [
        {
          title: "rmeme",
          desc: "rmeme (Random Meme) is an API that will return a link to a random meme when called.\
                 The api is written using ExpressJS and has its data storage handled by mongodb.\
                 Full documentation has yet to be written, but basic features include getting a meme,\
                 uploading a meme, and upvoting or downvoting a meme. All features are handled by normal\
                 REST api calls and basic API key authorization.",
          ext_color: "#44BBA4",
          info_color: "green",
          img_link: "/src/assets/home/rmeme2_temp.jpg",
          ext_link: "https://rmeme.me"
        },
        {
          title: "Solar System Simulation",
          desc: "This is a simulation of the solar system that I made for my programming studio class\
                 in school. The webgl canvas and shapes are rendered using p5.js. The data is dynamically\
                 fetched from The Solar System OpenData API (https://api.le-systeme-solaire.net). The sizing isn't\
                 very realistic, but it is somewhat to scale. Has a few features allowing to show planetary\
                 orbits, filter which planets/objects are shown, changing the simulation speed, and a few others.",
          ext_color: "#44BBA4",
          info_color: "green",
          img_link: "/src/assets/home/solar2_temp.jpg",
          ext_link: "https://leinad.dev/solar"
        },
        {
          title: "Discord Bot (tfw)",
          desc: "tfw is a discord bot that I started a few years ago to help teach myself nodeJS.\
                 The bot itself is written using DiscordJS (a node wrapper around discord's API) and\
                 is really just a sandbox and playground for whatever I feel like. With it you can see\
                 how the rmeme from above API can be used, play some mini games, or get a random picture\
                 of my cat or dog.",
          ext_color: "#44BBA4",
          info_color: "green",
          img_link: "/src/assets/home/tfw2_temp.jpg",
          ext_link: "https://github.com/dabass2/Github-Bot"
        },
        {
          title: "Assorted Projects",
          desc: "Not all of the small random things I make can be displayed in their own section\
                 nor do I really want to. So I've put them inside of here with their own mini-descriptions\
                 and links.",
          ext_color: "#44BBA4",
          info_color: "green",
          img_link: "src/assets/home/assort3_temp.jpg",
        }
      ]
    }
  }
}
</script>