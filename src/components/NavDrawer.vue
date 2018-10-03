<template lang="html">
  <div>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            SMART Dashboard 2.0
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <!-- <v-divider></v-divider> -->

    <v-list dense class="pt-0">
      <v-list-tile>
        <v-icon>cloud_upload</v-icon>
        <upload-btn
          class="ml-2"
          title="Upload Report"
          :fileChangedCallback="parseFile">
        </upload-btn>
      </v-list-tile>

      <v-list-tile
        v-for="item in items"
        :key="item.title"
        :to="item.path"
      >

      <v-list-tile-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </div>

</template>

<script>
import * as Papa from 'papaparse'
import UploadButton from 'vuetify-upload-button'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      items: [
        { title: 'Operating Plan Targets', icon: 'line_style', path: '/ops-plan-targets' },
        { title: 'Initiative Commitments', icon: 'chrome_reader_mode', path: 'initiative-commitments' },
        { title: 'Setup', icon: 'settings', path: '/setup' }
      ],
      right: null
    }
  },

  components: {
    'upload-btn': UploadButton
  },

  methods: {
    ...mapMutations([
      'storeReportData'
    ]),
    parseFile (file) {
      Papa.parse(file, {
        complete: (results) => {
          this.storeReportData(results.data)
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
