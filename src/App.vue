<template>
  <v-app>
    <v-main>
      <v-btn
        :icon=btnIcon
        @click="toggleTheme"
        size="small"
      >
      </v-btn>
      <Home />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Home from '@/components/Home.vue';
import { useTheme } from 'vuetify/lib/framework.mjs';
import { ref } from 'vue';

export default {
  setup() {
    const theme = useTheme()
    const btnIcon = ref(theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-brightness-2')

    return {
      theme,
      btnIcon,
    }
  },
  methods: {
    toggleTheme() {
      this.theme.global.name.value = this.theme.global.current.value.dark ? 'light' : 'dark'
      this.btnIcon = this.theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-brightness-2'
    }
  },
  components: {
    Home
  }
}
</script>
