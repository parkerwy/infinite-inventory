import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: require('@/components/HomeView').default
    },
    {
      path: '/preference',
      name: 'Preference',
      component: require('@/components/PreferenceView').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
