<template>
  <v-container fill-height>
    <v-row align="center" justify="center">
      <v-col align="center" cols="6">
        <v-card>
          <v-card-title class="justify-center text-h2"> Files </v-card-title>
          <v-card-subtitle class="text-subtitle-1">
            Overview of assorted files present on the site.
          </v-card-subtitle>
          <v-divider width="85%"></v-divider>
          <div class="links">
            <v-breadcrumbs :items="pages" divider="|" />
            <v-breadcrumbs :items="vizu" divider="|" />
            <v-breadcrumbs :items="threeD" divider="|" />
            <v-breadcrumbs :items="dnd" divider="|" />
            <v-breadcrumbs :items="noah" divider="|" />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Files",
  data: () => ({
    pages: [
      {
        text: "Home Page",
        href: "/",
      },
      {
        text: "Work Page",
        href: "/work",
      },
    ],
    vizu: [
      {
        text: "Vizu Page",
        href: "/assort/vizu",
      },
      {
        text: "Weak Law of Big Numbers",
        href: "/assort/vizu/lobn",
      },
      {
        text: "Bubble Sort",
        href: "/assort/vizu/bubble",
      },
      {
        text: "Playground for 3D Tests",
        href: "/assort/vizu/3D",
      },
    ],
    threeD: [
      {
        text: "Random Stuff",
        href: "/assort/stuff",
      },
      {
        text: "Data",
        href: "/assort/stuff/planetData.json",
      },
    ],
    dnd: [
      {
        text: "DND Page",
        href: "/assort/dnd",
      },
    ],
    noah: [
      {
        text: "Test Website for a Friend",
        href: "/noah",
      },
    ],
  }),
};
</script>

<style></style>
