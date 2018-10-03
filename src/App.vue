<template>
  <v-app dark>
    <v-navigation-drawer app permanent>
      <NavDrawer></NavDrawer>
    </v-navigation-drawer>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavDrawer from '@/components/NavDrawer.vue'
export default {
  name: 'App',
  data () {
    return {

    }
  },

  components: {
    NavDrawer
  }
}
</script>
