<template>
  <v-container>
    <v-responsive class="d-flex pt-12">
      <v-row v-for="(item, i) in projects" :key=i align="center">
        <v-col align="center">
          <v-card class="my-5 text-left" max-width="40vw" max-height="50vh">
            <v-card-title class="headline font-weight-light">{{ item.title }}</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="white text--primary">{{ item.desc }}</v-card-text>
            <v-card-actions>
              <v-icon rounded>mdi-language-javascript</v-icon>
              <v-spacer />
              <v-btn icon=" mdi-link" :color="item.color" :href="`${item.link}`" target="_blank" />
              <v-btn icon="mdi-chevron-right" />
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- <v-col>
          <v-img src="/src/assets/home/main_bg.jpg" aspect-ratio=".69"></v-img>
        </v-col> -->
      </v-row>
    </v-responsive>
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
        },
        {
          title: "Random Meme Api",
          desc: "Random Meme (rmeme) is an API that will return a random meme to be used in whatever way you want to. Full documentation coming soon (probably). See my discord bot for an example of the api in use.",
          color: "red",
          link: "https://rmeme.me"
        },
        {
          title: "Random Meme Api",
          desc: "Random Meme (rmeme) is an API that will return a random meme to be used in whatever way you want to. Full documentation coming soon (probably). See my discord bot for an example of the api in use.",
          color: "red",
          link: "https://rmeme.me"
        },
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