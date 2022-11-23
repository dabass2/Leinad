<template>
  <v-container class="fill-height">
    <v-timeline>
      <v-timeline-item v-for="(item, i) in projects" :key=i hide-dot width="30vw">
        <template v-slot:opposite>
          <a>
            <v-img src="https://leinad.dev/images/edward/edward_despair.jpg" max-height="300px"></v-img>
          </a>
        </template>
        <v-card>
          <v-card-title class="headline font-weight-light">{{ item.title }}</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="white text--primary">{{ item.desc }}</v-card-text>
          <v-card-actions>
            <v-btn :color="item.color" :href="`${item.link}`">Visit</v-btn>
          </v-card-actions>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script lang="ts">
export default {
  data(): any {
    return {
      projects: [
        {
          title: "Random Meme Api",
          desc: "Random Meme (rmeme) is an API that will return a random meme to be used in whatever way you want to. Full documentation coming soon (probably). See my discord bot for an example of the api in use.",
          color: "red",
          link: "https://rmeme.me"
        }
      ]
    }
  }
}
</script>