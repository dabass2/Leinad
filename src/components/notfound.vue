<template>
  <div>
    <v-container fill-height grid-list-md text-xs-center>
      <v-layout align-center justify-center column>
        <v-card color="white" elevation="10" width="75vw">
          <div class="text-xl-center display-4">
            Files
          </div>
          <div class="text-xs-center title">
            Overview of assorted files present on the site.
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
  </div>
</template>

<script>
</script>

<style>
</style>
