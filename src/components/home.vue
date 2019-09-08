<template>
  <div>
    <div id="test">
      <v-parallax src="https://leinad.pw/images/HAFBE92.jpg">  <!-- Web links because I don't have them local when testing and I'm too lazy to change..-->
      <v-layout
        align-center
        column
        justify-center
      >
        <h1 class="display-2 font-weight-thin mb-3">Daniel Bass</h1>
        <h4 class="subheading">Computer Science + Astronomy | Student | UIUC</h4>
      </v-layout>
      </v-parallax>
    </div>

    <div class="bodyContent">
      <div class="cards">
        <v-layout>
            <v-card>
              <a href="work">
                <v-img
                  src="https://leinad.pw/images/mac.jpg"
                  aspect-ratio="2.75"
                ></v-img>
              </a>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Work</h3>
                  <div> <span>View my various projects and/or labs that I have completed. Many of them are made for learning experiences.</span> </div>
                </div>
              </v-card-title>

              <v-card-actions>
                <v-btn flat color="red" to="/work">Visit</v-btn>
              </v-card-actions>
            </v-card>
        </v-layout>
      </div>

      <div class="cards">
        <v-layout>
            <v-card>
              <a href="files">
                <v-img
                  src="https://leinad.pw/images/codeWall.jpg"
                  aspect-ratio="2.75"
                ></v-img>
              </a>

              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">Files</h3>
                  <div> <span>Check out files for my projects. Feel free to look around and explore what is there. Mostly used for audio files.</span> </div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="red" to="/files">Visit</v-btn>
              </v-card-actions>
            </v-card>
        </v-layout>
      </div>
    </div>
  </div>
</template>

<script>
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
