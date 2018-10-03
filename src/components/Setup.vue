<template lang="html">
  <v-container fluid>
    <v-scale-transition mode="out-in">
      <v-layout align-center justify-center row wrap>
        <v-flex xs6>
          <v-form class="px-1">
            <v-text-field
              v-for="item in itemsLeft"
              v-model="item.value"
              :label="item.label"
              :key="item.name"
              required
            ></v-text-field>
          </v-form>
        </v-flex>
        <v-flex xs6>
          <v-form class="px-1">
            <v-text-field
              v-for="item in itemsRight"
              v-model="item.value"
              :label="item.label"
              :key="item.name"
              required
            ></v-text-field>
          </v-form>
        </v-flex>
        <v-btn @click="saveSetup" color="success">Save</v-btn>
      </v-layout>
    </v-scale-transition>
  </v-container>
</template>

<script>
export default {
  name: 'Setup',
  data () {
    return {
      itemsLeft: [
        { label: 'FLSA BW/HR', name: 'flsaBwHr', value: '' },
        { label: 'FLSA AVG HRS NO BW CASES', name: 'flsaNoBwHrs', value: '' },
        { label: '% AGENCY INITIATED', name: 'percentAI', value: '' },
        { label: '% AGENCY INITIATED NO VIOLS', name: 'percentNoViolAI', value: '' },
        { label: '% COMPLAINT NO VIOLS', name: 'percentCmpltNoViol', value: '' },
        { label: '# COMPLIANCE ACTIONS CONCLUDED', name: 'numConcluded', value: '' },
        { label: '% PRIORITY FLSA CASES', name: 'percentPriority', value: '' },
        { label: '% FLSA CMP COLLECTION', name: 'percentFlsaCmp', value: '' },
        { label: '# AG CASES', name: 'numAg', value: '' },
        { label: 'AG CMP PER HOUR', name: 'agCmpPerHr', value: '' },
        { label: '# FMLA CASES', name: 'numFMLA', value: '' },
        { label: '% FMLA NO VIOLS', name: 'percentNoViolFMLA', value: '' },
        { label: '# DBRA CASES', name: 'numDBRA', value: '' }
      ],
      itemsRight: [
        { label: 'DBRA BW/HR', name: 'dbraBwHr', value: '' },
        { label: '# SCA CASES', name: 'numSCA', value: '' },
        { label: 'SCA BW/HR', name: 'scaBwHr', value: '' },
        { label: '# 14(c) CASES', name: 'num14c', value: '' },
        { label: 'DBA CONSTRUCTION INITIATIVE', name: 'constructionDBA', value: '' },
        { label: 'FLSA CONSTRUCTION INITIATIVE', name: 'constructionFLSA', value: '' },
        { label: 'FLSA RESTAURANT INITIATIVE', name: 'restaurantFLSA', value: '' },
        { label: 'FMLA RESTAURANT INITIATIVE', name: 'restaurantFMLA', value: '' },
        { label: 'H2B LANDSCAPING INITIATIVE', name: 'landscapingH2B', value: '' },
        { label: 'AG INITIATIVE', name: 'agInitiative', value: '' },
        { label: 'SCA SECURITY GUARDS INITIATIVE', name: 'securitySCA', value: '' },
        { label: 'FLSA SECURITY GUARDS INITIATIVE', name: 'securityFLSA', value: '' },
        { label: 'FLSA 14(c) INITIATIVE', name: 'flsa14c', value: '' }
      ]
    }
  },

  mounted () {
    for (let i = 0; i < this.itemsLeft.length; i++) {
      if (localStorage.getItem(this.itemsLeft[i].name)) {
        this.itemsLeft[i].value = JSON.parse(localStorage.getItem(this.itemsLeft[i].name))
      }
    }
    for (let i = 0; i < this.itemsRight.length; i++) {
      if (localStorage.getItem(this.itemsRight[i].name)) {
        this.itemsRight[i].value = JSON.parse(localStorage.getItem(this.itemsRight[i].name))
      }
    }
  },

  methods: {
    saveSetup () {
      for (let i = 0; i < this.itemsLeft.length; i++) {
        localStorage.setItem(this.itemsLeft[i].name, JSON.stringify(this.itemsLeft[i].value))
      }
      for (let i = 0; i < this.itemsRight.length; i++) {
        localStorage.setItem(this.itemsRight[i].name, JSON.stringify(this.itemsRight[i].value))
      }
    }
  }
}
</script>

<style lang="css">
</style>
