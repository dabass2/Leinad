<template>
  <div>
    <v-row no-gutters>
      <v-col align="center">
        <v-parallax height="300" :src="require('@/assets/work/workBG.jpg')">
          <h1 class="display-2 font-weight-thin">Work | Projects</h1>
          <h4 class="subheading my-1">Various Projects and Fun Experiments</h4>
          <div class="text-xs-center">
            <v-btn text icon dark href="https://github.com/dabass2">
              <v-icon>fab fa-github</v-icon>
            </v-btn>
            <v-btn text icon dark href="https://www.linkedin.com/in/daniel-bass-16204617b/">
              <v-icon>fab fa-linkedin</v-icon>
            </v-btn>
          </div>
        </v-parallax>
      </v-col>
    </v-row>

    <div class="container hidden-sm-and-down">
      <div class="timeline">
        <v-timeline align-top>
          <v-timeline-item v-for="(item, i) in timeline" :key="i" hide-dot>
            <template v-slot:opposite>
              <a :href="`${item.link}`"
                ><v-img
                  :src="require(`@/assets/work/${item.img}`)"
                  aspect-ratio="3.69"
                ></v-img
              ></a>
            </template>
            <v-card flat color="transparent">
              <v-card-title class="headline font-weight-light">{{item.title}}</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="white text--primary">{{item.text}}</v-card-text>
              <v-card-actions>
                <v-btn dark :color="item.color" :href="`${item.link}`">Visit</v-btn>
              </v-card-actions>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </div>
    </div>

    <v-container class="hidden-md-and-up">
      <v-row>
        <v-col>
          <v-card v-for="(item, i) in timeline" :key="i" flat class="my-4">
            <a :href="`${item.link}`">
              <v-img
                :src="require(`@/assets/work/${item.img}`)"
                aspect-ratio="3.69"
              ></v-img>
            </a>
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text>{{ item.text }}</v-card-text>
            <v-card-actions>
              <v-btn dark :color="item.color" :href="`${item.link}`">Visit</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Work",
  data() {
    return {
      timeline: [
        {
          img: "aniGuess.jpg",
          color: "#C5E7E2",
          title: "Anime Guess",
          text: "Like Anime? Like Anime but don't want to admit it?\
          Test how well you know your favorite anime here. Put in your AniList\
          or MyAnimeList account name, and play a game where you've gotta guess\
          what show the character is from before time runs out.",
          link: "anime",
        },
        {
          img: "bot.jpg",
          color: "#A1CDA8",
          title: "Discord Bot",
          text: "A discord bot I made called 'tfw'. Originally\
          it was meant to send a random 'The Feeling (or face) When' image, but\
          instead morphed into a playground where I learnt javascript. Use it to\
          get a random meme, or even keep track of currently airing anime you're\
          watching.",
          link: "https://github.com/dabass2/Discord-Bot",
        },
        {
          img: "rmeme.jpg",
          color: "#B5DFCA",
          title: "Random Meme Api",
          text: "Random Meme (rmeme) is an API that \
          will return a random meme to be used in whatever way you want to. Full \
          documentation coming soon (probably). See my discord bot for an example\
          of the api in use.",
          link: "https://rmeme.me",
        },
        {
          img: "watchpls2.jpg",
          color: "#627264",
          title: "WatchPls",
          text: "WatchPls\
          was the result of rabb.it shutting down. Add the chrome or edge extension to\
          your browser, and with a click of a button you can create a room where you\
          and your friends can all watch whatever you share. More features coming soon\
          (maybe).",
          link: "https://watchpls.me/",
        },
        {
          img: "sort.jpg",
          color: "#AD9BAA",
          title: "Assorted Work",
          text: "This is where anything\
          I've done that doesn't fit anywhere else goes. It's primarily random\
          files just thrown about. Check it out, maybe you'll find something fun.",
          link: "files",
        },
      ],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.timeline {
  width: 75vw;
}
.timeline-text {
  width: 75%;
}
.btn {
  float: left;
}
#copyright {
  padding: 10px;
}
</style>
