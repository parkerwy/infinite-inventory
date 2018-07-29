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
      path: '/app',
      name: 'App',
      component: require('@/components/AppView').default
    },
    {
      path: '/environment',
      name: 'Environment',
      component: require('@/components/EnvironmentView').default
    },
    {
      path: '/cluster',
      name: 'Cluster',
      component: require('@/components/ClusterView').default
    },
    {
      path: '/server',
      name: 'Server',
      component: require('@/components/ServerView').default
    },
    {
      path: '/host',
      name: 'Host',
      component: require('@/components/HostView').default
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
