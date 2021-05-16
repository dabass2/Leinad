<template>
  <div>
    <v-row>
      <v-col align="center">
        <v-parallax :src="require('@/assets/home/night.jpg')">
          <h1 class="display-2 font-weight-thin">Daniel Bass</h1>
          <h4 class="subheading my-1">
            Computer Science + Astronomy | Student | UIUC
          </h4>
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

    <v-row no-gutters justify="center" class="hidden-md-and-down">
      <v-col v-for="(card, i) in cards" :key="i" cols="5">
        <v-card class="ma-4">
          <a :href="`/${card.link}`"
            ><v-img
              :src="require(`@/assets/home/${card.img}`)"
              aspect-ratio="2.75"
            ></v-img
          ></a>
          <v-card-title class="text-h5">{{card.title}}</v-card-title>
          <v-card-text>{{card.text}}</v-card-text>
          <v-card-actions>
            <v-btn dark :color="card.color" :to="`/${card.link}`">Visit</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters justify="center" class="hidden-lg-and-up">
      <v-col v-for="(card, i) in cards" :key="i" cols="12">
        <v-card class="ma-4">
          <a :href="`/${card.link}`"
            ><v-img
              :src="require(`@/assets/home/${card.img}`)"
              aspect-ratio="2.75"
            ></v-img
          ></a>
          <v-card-title class="text-h5">{{card.title}}</v-card-title>
          <v-card-text>{{card.text}}</v-card-text>
          <v-card-actions>
            <v-btn dark :color="card.color" :to="`/${card.link}`">Visit</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      cards: [
        {
          img: "code.jpg",
          text: "A collection of things that I have done\
          and/or worked on. Still working on a lot of things (when I get time).\
          and hope to add to the list.",
          title: "Work",
          color: "black",
          link: "work",
        },
        {
          img: "git.jpg",
          text: "A nice and quick link to the files on my server.\
          Nothing ground breaking, but maybe something interesting will catch your\
          eye.",
          title: "Files",
          color: "black",
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
}
.cards {
  padding: 15px;
}
.bodyContent {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.bodyText {
  width: 75vw;
  text-align: center;
}
#copyright {
  padding: 10px;
}
.subheading {
  text-align: center;
}
.src {
  height: 100vh;
}
</style>
