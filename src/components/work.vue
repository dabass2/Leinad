<template>
<!-- <div> -->
  <div>
    <!-- Parallax Start -->
      <v-parallax height="300" src="https://leinad.pw/images/seaside.jpg">
          <h1 class="display-2 font-weight-thin mb-3, text-xs-center">Project | Labs | Assorted Programs</h1>
          <div class="text-xs-center">
            <v-btn flat icon dark href="https://github.com/dabass2">
              <v-icon>fab fa-github</v-icon>
            </v-btn> Github
            <v-btn flat icon dark href="https://leinad.pw/files">
              <v-icon>fas fa-th-large</v-icon>
            </v-btn> Files
          </div>
      </v-parallax>
      <!-- Parallax End -->
      <!-- Timeline Start -->
      <div class="container hidden-sm-and-down">
        <div class="timeline">
          <v-timeline align-top>
            <v-timeline-item
              v-for="(item, i) in timeline"
              :key="i"
              hide-dot
            >
            <template v-slot:opposite>
              <v-img :src="`${item.img}`" height="200px"></v-img>
            </template>
              <div class="timeline-text">
                <h2 :class="`headline font-weight-light mb-3 ${item.color}--text`">{{item.title}}</h2>
                <p>{{item.text}}</p>
                <v-btn dark :color="item.color" :href="`${item.link}`">Visit</v-btn>
              </div>
            </v-timeline-item>
          </v-timeline>
        </div>
      </div>
      <!-- Timeline End -->
      <v-container grid-list-md>
        <v-layout row wrap align-center class="hidden-md-and-up">
          <v-flex xs12>
            <v-card>
              <a href="https://leinad.pw/assort/vizu">
                <v-img
                  src="https://leinad.pw/images/sort.jpg"
                  aspect-ratio="2.69"
                ></v-img>
              </a>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Vizulations</h3>
                  <div> <span>Here are visualization of various topics that I have made for fun. I'm no data scientist, but these are fun to make. I'll most likely make more in the future to learn new things and refine topics.</span> </div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat color="red" href="https://leinad.pw/assort/vizu">Visit</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12>
            <v-card>
              <a href="https://github.com/dabass2/Discord-Bot">
                <v-img
                  src="https://leinad.pw/images/bot.jpg"
                  aspect-ratio="2.69"
                ></v-img>
              </a>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Discord Bot</h3>
                  <div> <span>I made a discord bot, however it's mostly just for learning purposes and having fun. It's not anything special yet but maybe one day I'll make it something greater.</span> </div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat color="red" href="https://github.com/dabass2/Discord-Bot">Visit</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12>
            <v-card>
              <a href="files">
                <v-img
                  src="https://leinad.pw/images/boxes.jpg"
                  aspect-ratio="2.69"
                ></v-img>
              </a>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Assorted Work</h3>
                  <div> <span>This is where anything I've done that doesn't fit anywhere else goes. School work and other projects have their home here.</span> </div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat color="red" href="https://leinad.pw/files">Visit</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timeline: [
        { img: 'https://leinad.pw/images/sort.jpg', color: '#899E8B', title:
          'Visualizations', text: "Here are visualization of various \
          topics that I have made for fun. I'm no data scientist, but these are\
          fun to make. I'll most likely make more in the future to learn new \
          things and refine topics.", link: "https://leinad.pw/assort/vizu" },
        { img: 'https://leinad.pw/images/bot.jpg', color: '#BDD2A6', title:
          'Discord Bot', text: "I made a discord bot, however it's mostly\
          just for learning purposes and having fun. It's not anything special\
          yet but maybe one day I'll make it something greater.", link: "https://github.com/dabass2/Discord-Bot"},
        { img: 'https://leinad.pw/images/boxes.jpg', color: '#B09398', title:
          'Assorted Work', text: "This is where anything\
          I've done that doesn't fit anywhere else goes. School work and other\
          projects have their home here.", link: "https://leinad.pw/files/"}
      ]
    }
  }
}
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
