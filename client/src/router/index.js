import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Sites from '@/components/Sites';
import Site from '@/components/Site';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HelloWorld
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
      path: '/sites',
      name: 'sites',
      component: Sites
    },
    {
      path: '/sites/:siteTitle',
      name: 'site',
      component: Site
    }
  ]
});
