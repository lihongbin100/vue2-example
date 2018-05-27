import Vue from 'vue'
import Router from 'vue-router'
import Feed from '@/components/views/Feed'
import Recent from '@/components/views/Recent'
import TopbarDefault from '@/components/tools/TopbarDefault'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Feed',
      components: {
        navigation: TopbarDefault,
        default: Feed
      }
    },
    {
      path: '/recent',
      name: 'Recent',
      components: {
        navigation: TopbarDefault,
        default: Recent
      }
    },
    {
      path: '/near',
      name: 'Nearby',
      components: {
        navigation: TopbarDefault
      }
    }
  ]
})
