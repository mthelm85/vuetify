import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VForm,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VTextField,
  VToolbar,
  transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VForm,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VTextField,
    VToolbar,
    transitions
  },
  theme: {
    primary: '#FFC400',
    secondary: '#5C6BC0',
    accent: '#F57F17',
    error: '#880E4F',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50'
  },
  iconfont: 'md'
})
