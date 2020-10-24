<template>
  <v-row justify="center">
    <v-col align="center" cols="5">
      <v-card>
        <v-card-title class="justify-center text-h1">
          Files
        </v-card-title>
        <v-card-subtitle class="justify-center text-subtitle-1">
          Overview of assorted files present on the site.
        </v-card-subtitle>
        <v-divider width="85%"></v-divider>
        <div class="links">
          <v-breadcrumbs :items="vizu" divider=">"/>
          <v-breadcrumbs :items="threeD" divider=">"/>
          <v-breadcrumbs :items="dnd" divider=">"/>
          <v-breadcrumbs :items="cgi" divider=">"/>
          <v-breadcrumbs :items="noah" divider=">"/>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      vizu: [
        {
          text: 'File Page',
          href: '/assort'
        },
        {
          text: 'Vizu Page',
          href: '/assort/vizu'
        },
        {
          text: 'LoBN',
          href: '/assort/vizu/lobn'
        },
        {
          text: 'Bubble Sort',
          href: '/assort/vizu/bubble'
        },
        {
          text: '3D',
          href: '/assort/vizu/3D'
        }
      ],
      threeD: [
        {
          text: 'File Page',
          href: '/assort'
        },
        {
          text: 'Data',
          href: '/assort/stuff/planetData.json'
        },
      ],
      dnd: [
        {
          text: 'File Page',
          href: '/assort'
        },
        {
          text: 'DND Page',
          href: '/assort/dnd'
        }
      ],
      cgi: [
        {
          text: 'File Page',
          href: '/assort'
        },
        {
          text: 'CGI-bin',
          href: '/assort/cgi-bin/main.py'
        }
      ],
      noah: [
        {
          text: 'Base Page',
          href: '/'
        },
        {
          text: 'Noah',
          href: '/noah'
        }
      ]
    })
  }
</script>

<style>
</style>
