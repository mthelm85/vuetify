<template lang="html">
  <v-container fluid>
    <v-scale-transition mode="out-in">
      <v-layout align-center justify-center row fill-height>
        <stacked-bar></stacked-bar>
      </v-layout>
    </v-scale-transition>
  </v-container>
</template>

<script>
import StackedBar from '@/components/StackedBar'
export default {
  components: {
    'stacked-bar': StackedBar
  }
}
</script>

<style lang="css">
</style>
