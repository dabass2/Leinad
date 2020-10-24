<template>
  <v-row justify="center">
    <v-col align="center" cols="3">
      <v-card flat>
        <v-card-title class="justify-center text-h1 pl-1">404</v-card-title>
        <v-card-subtitle class="justify-center text-h5">Not Found</v-card-subtitle>
        <v-card-text class="text-subtitle-1">
          How sad...this page doesn't exist. Well honestly it
          might just be my fault this broke. Anyway, did you know
          Leinad is just my name backwards? Also I hope you're not
          viewing this page on a small screen...
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn dark to="/">Home</v-btn>
          <v-btn dark to="/work">Work</v-btn>
          <v-btn dark to="/files">Files</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
</script>

<style>
</style>
