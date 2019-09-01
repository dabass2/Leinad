<template>
  <v-app>
    <div class="row header">
      <v-toolbar >
        <v-btn
         flat
         icon
         @click.stop="drawer = !drawer"
         >
          <v-icon>fas fa-bars</v-icon>
        </v-btn>
        <v-toolbar-title>Leinad</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat icon href="https://www.linkedin.com/in/daniel-bass-16204617b/"><v-icon>fab fa-linkedin</v-icon></v-btn>
          <v-btn flat icon href="https://github.com/dabass2"><v-icon>fab fa-github</v-icon></v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://leinad.pw/images/logo.png">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Leinad</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          :to="items.href"
          v-on:click="(item.href === 'files') ? pizza() : goTo(item.href)"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <transition name="page" mode="out-in">
                <router-view/>
      </transition>
    </v-content>
    <v-footer dark app insert>
      <v-btn flat icon href="https://www.linkedin.com/in/daniel-bass-16204617b/"><v-icon size="24px">fab fa-linkedin</v-icon></v-btn>
      <v-btn flat icon href="https://github.com/dabass2"><v-icon size="24px">fab fa-github</v-icon></v-btn>
      <v-spacer></v-spacer>
      <div id="copyright">&copy;2019 — <strong>Daniel Bass</strong></div>
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
          { title: 'Home', icon: 'fas fa-home', href: "home" },
          // { title: 'About', icon: 'fas fa-user', href: "about" },
          { title: 'Work', icon: 'fas fa-folder', href: "work" },
          { title: 'Files', icon: 'fas fa-th-large', href: "files"}
        ]
      }
    },
    methods: {
      pizza() {
        window.open("https://leinad.pw/assort");
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
