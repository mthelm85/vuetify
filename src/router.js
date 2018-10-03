import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PlanTargets from '@/components/PlanTargets.vue'
import Commitments from '@/components/Commitments.vue'
import Setup from '@/components/Setup.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ops-plan-targets',
      name: 'ops-plan-targets',
      component: PlanTargets
    },
    {
      path: '/initiative-commitments',
      name: 'initiative-commitments',
      component: Commitments
    },
    {
      path: '/setup',
      name: 'setup',
      component: Setup
    }
  ]
})
