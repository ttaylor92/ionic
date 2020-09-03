import Vue from 'vue';
import Router from 'vue-router';
import { IonicVueRouter } from '@ionic/vue';
const rdRoutes = require('../../.rdvue/routes.js');
const routeList = rdRoutes.default;

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    ...routeList,
    // ------------------------------------------------------------------------
    // HelloWorld Page
    // ------------------------------------------------------------------------
    {
      path: '/',
      name: 'hello-world',
      meta: {
        // Specify the layout to use for this page. All pages will use
        // the 'default' layout if not explicity specified here.
        layout: 'default',
      },
      // Route level code-splitting is used encapsulate all the code
      // needed for a page into it's own JS file. This greatly speeds-up
      // the load time of individual page. The 'webpackChunkName' comment
      // below *SHOULD* have a unique name from other routes.
      component: () => import( /* webpackChunkName: "hello-world" */ '@/pages/hello-world'),
    },
    // ------------------------------------------------------------------------
    // TODO: Add your own pages
    // ------------------------------------------------------------------------

    {
      path: '/new-item',
      name: 'new-item',
      component: () => import(/* webpackChunkName: "new-item" */ '@/pages/new-item-page'),
    },
  ],
});
