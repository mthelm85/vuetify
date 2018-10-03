<template lang='html'>
  <v-container fluid>
    <v-scale-transition mode='out-in'>
      <v-layout align-center justify-center fill-height>
        <partial-gauge></partial-gauge>
      </v-layout>
    </v-scale-transition>
    <v-scale-transition mode='out-in'>
      <v-layout align-center justify-center fill-height>
        <bullet-chart></bullet-chart>
      </v-layout>
    </v-scale-transition>
  </v-container>
</template>

<script>
import BulletChart from '@/components/BulletChart'
import PartialGauge from '@/components/PartialGauge'
export default {
  components: {
    'bullet-chart': BulletChart,
    'partial-gauge': PartialGauge
  }
}
</script>

<style lang='css'>

</style>
