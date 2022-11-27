<template>
  <v-container>
    <v-responsive class="d-flex pt-15">
      <div class="font-weight-thin text-h3 text-center">Projects</div>
      <div class="font-weight-light subtitle-2 text-center pt-2">Links to Projects &amp; More Info</div>
      <v-divider class="mt-4" />
      <v-row v-for="(item, i) in projects" :key=i align="center" dense>
        <v-col cols="4" justify="center">
          <v-img :src=item.img_link contain max-height="300" max-width="350"></v-img>
        </v-col>
        <v-col cols="8" justify="center">
          <InfoComp :proj="item" />
        </v-col>
        <v-divider />
      </v-row>
      <v-divider />
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
import InfoComp from '@/components/InfoComp.vue';
import { ref } from 'vue';

export interface Project {
  title: string,
  desc: string,
  ext_color: string,
  info_color: string,
  img_link?: string,
  ext_link?: string,
  code_link?: string,
  techs?: Array<string>
}

const projects = ref<Array<Project>>(
  [
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
      ext_link: "https://rmeme.me",
      techs: ["NodeJS", "ExpressJS", "MongoDB"]
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
      ext_link: "https://leinad.dev/solar",
      code_link: "https://github.com/dabass2/p5-solar-system",
      techs: ["Javascript", "Vue", "Vuetify", "p5js", "APIs"]
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
      ext_link: "https://github.com/dabass2/Github-Bot",
      code_link: "https://github.com/dabass2/Discord-Bot",
      techs: ["NodeJS", "APIs"]
    },
    {
      title: "Mood Music",
      desc: "Mood Music is an application that I created in a group of four in school for CS 242:\
              Programming Studio. Within the application you can select from a list of six different\
              moods, depending on what you pick a list of up to 200 songs will be returned. In other words\
              it generates a playlist for you based on your mood. It also has a basic account system which\
              will allow you to save playlists and what not. The music itself is built upon Spotify data.\
              The frontend is written using Vuetify and the data is stored in a self-hosted MySQL DB.",
      ext_color: "#44BBA4",
      info_color: "green",
      img_link: "/src/assets/home/mood2_temp.jpg",
      ext_link: "https://leinad.dev/moodmusic",
      code_link: "https://github.com/dabass2/Mood-Music",
      techs: ["Vue", "Vuetify", "Javascript", "MySQL"]
    },
    {
      title: "Anime Guess",
      desc: "Inspired by the game that can played at https://openings.ninja, Anime Guess is a\
             mini-game that I created in my free time. On the page you are presented with a screen\
             in which you can input your username on an anime tracker website (MyAnimeList or AniList)\
             then you get presented with a character and you must guess which show said character is from\
             within the time limit. The site itself is made using Vue and Vuetify and the data is powered\
             by the AniList GraphQL API and an outdated and possibly broken JikanJS MAL API.",
      ext_color: "#44BBA4",
      info_color: "green",
      img_link: "/src/assets/home/anime2_temp.jpg",
      ext_link: "https://leinad.dev/anime",
      code_link: "https://github.com/dabass2/anime-guess",
      techs: ["Vue", "Vuetify", "Javascript", "APIs"]
    },
    {
      title: "Assorted Projects",
      desc: "Not all of the small random things I make can be displayed in their own section\
              nor do I really want to. So I've put them inside of here with their own mini-descriptions\
              and links.",
      ext_color: "#44BBA4",
      info_color: "green",
      img_link: "src/assets/home/assort3_temp.jpg",
      techs: []
    }
  ]
)
</script>