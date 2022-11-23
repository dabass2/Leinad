<template>
  <v-container class="fill-height my-100" background-color="primary">
    <v-responsive class="d-flex align-center text-center fill-height">
      <div>
        <div class="text-h1 font-weight-thin">{{name}}</div>
        <div class="text-subtitle-1 font-weight-bold py-2">Software Engineer | Chicago</div>

        <div class="py-7" />
      </div>
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href="#projects"
            color="primary"
            variant="flat"
          >
            <v-icon
              icon="mdi-view-dashboard"
              size="large"
              start
            />
            Projects
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="secondary"
            variant="text"
            border
          >
            <v-icon
              icon="mdi-folder"
              size="large"
              start
            />

            Files
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
export default {
  setup() {
    let name = 'Daniel Bass'

    return {
      name
    }
  }
}
</script>
