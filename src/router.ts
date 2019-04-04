import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/views/Home.vue').default,
    },
    {
      path: '/getting-started',
      name: 'getting-started',
      component: require('@/views/GettingStarted.vue').default,
    },
    {
      path: '/design-tokens',
      name: 'design-tokens',
      component: require('@/views/DesignTokens.vue').default,
    },
    {
      path: '/overview',
      name: 'overview',
      component: require('@/views/Overview.vue').default,
    },
    {
      path: '/overview/:id',
      name: 'overview',
      component: require('@/views/Overview.vue').default,
    },
    {
      path: '/typography',
      name: 'typography',
      component: require('@/views/Typography.vue').default,
    },
    {
      path: '/typography/:id',
      name: 'typography item',
      component: require('@/views/Typography.vue').default,
    },
    {
      path: '/components/:id',
      name: 'components item',
      component: () => import('@/views/Components.vue')
    },
    {
      path: '/colours',
      name: 'colours',
      component: () => import('@/views/Colours.vue')
    },
    {
      path: '/colours/:id',
      name: 'colours item',
      component: () => import('@/views/Colours.vue')
    },
    {
      path: '/layout/:id',
      name: 'layout',
      component: () => import('@/views/Layouts.vue')
    },
    {
      path: '/images/:id',
      name: 'images',
      component: () => import('@/views/Icons.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {layout:'no-sidebar'},
      component: () => import('./views/About.vue'),
    },
  ],
});
