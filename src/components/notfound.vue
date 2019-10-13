<template>
  <v-container fill-height grid-list-md text-xs-center>
    <v-layout align-center justify-center column>
      <v-card color="white" width="100vw" height="70vh">
        <div class="text-xl-center display-4">
          404
        </div>
        <div class="text-xs-center title">
          Sorry, it's probably my fault. Not yours.
        </div>
        <div class="links flex-grow-1">
          <v-breadcrumbs :items="vizu" divider=">"/>
          <v-breadcrumbs :items="threeD" divider=">"/>
          <v-breadcrumbs :items="dnd" divider=">"/>
          <v-breadcrumbs :items="cgi" divider=">"/>
        </div>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
</script>

<style>
</style>
