<template>
  <v-app>
    <v-app-bar app color="#f2ebe3">
      <v-app-bar-title>
        <h5 class="text-h5 black--text"> Burger King </h5>
      </v-app-bar-title>
    </v-app-bar>
    <v-main>
    </v-main>
  </v-app>
</template>
<script>
import list from './components/List.vue'

export default {
  components: {
    list
  },
  name: 'App'
}
</script>