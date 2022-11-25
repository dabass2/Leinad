<template>
  <v-container class="text-center pt-0">
    <v-responsive height="100vh" class="align-center">
      <v-row>
        <v-col>
          <div class="text-h1 font-weight-thin">{{ getName() }}</div>
          <div class="text-subtitle-1 font-weight-bold py-2">Software Engineer | Chicago</div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn href="#projects" color="primary" variant="flat">
            <v-icon icon="mdi-view-dashboard" size="large" start />
            Projects
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn href="#files" color="secondary" variant="text" border>
            <v-icon icon="mdi-folder" size="large" start />
            Files
          </v-btn>
        </v-col>
      </v-row>
      <div class="pb-15" />
    </v-responsive>
  </v-container>
</template>

<script lang="ts">
export default {
  setup() {
    const names: Array<String> = ['Daniel', 'Leinad', 'Daniel Bass', 'My Name Jeff', 'Cruz Onby']
    const getName = () => names[Math.floor(Math.random() * names.length)]

    return {
      getName
    }
  }
}
</script>
