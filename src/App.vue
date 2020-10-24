<template>
  <v-app>
    <div class="row header">
      <v-toolbar class="ps-4">
        <v-btn
         text
         icon
         @click.stop="drawer = !drawer"
         >
          <v-icon>fas fa-bars</v-icon>
        </v-btn>
        <v-toolbar-title class="text-h6">Leinad</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text icon href="https://www.linkedin.com/in/daniel-bass-16204617b/"><v-icon>fab fa-linkedin</v-icon></v-btn>
          <v-btn text icon href="https://github.com/dabass2"><v-icon>fab fa-github</v-icon></v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list class="pa-1">
        <v-list-item>
          <v-list-item-avatar>
            <img :src="require('@/assets/logo.png')">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="text-body-1">Leinad</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list class="pt-0" dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router-link
          :to="item.link"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <transition name="page" mode="out-in">
        <router-view/>
      </transition>
    </v-main>

    <v-footer dark>
      <v-btn text icon href="https://www.linkedin.com/in/daniel-bass-16204617b/"><v-icon size="24px">fab fa-linkedin</v-icon></v-btn>
      <v-btn text icon href="https://github.com/dabass2"><v-icon size="24px">fab fa-github</v-icon></v-btn>
      <v-spacer></v-spacer>
      <div id="copyright">&copy;{{(new Date()).getFullYear()}} — <strong>Daniel Bass</strong></div>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'fas fa-home', link: "/" },
          { title: 'Work', icon: 'fas fa-folder', link: "/work" },
          { title: 'Files', icon: 'fas fa-th-large', link: "/files"}
        ]
      }
    }
  }
</script>

<style>
    .page-enter-active, .page-leave-active {
        transition: opacity .5s, transform .5s;
    }
    .page-enter, .page-leave-to {
        opacity: 0;
        transform: translateX(-30%);
    }

    /* width */
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: black;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
</style>
