import Vue from 'vue';
import Router from 'vue-router';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Sites from '@/components/Sites';
import ViewSite from '@/components/ViewSite';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sites',
      component: Sites
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sites/:siteTitle',
      name: 'site',
      component: ViewSite
    }
  ]
});
