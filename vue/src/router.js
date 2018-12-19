import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// const Welcome = () => import('~/pages/welcome')
import Login from '~/pages/auth/login';
import Register from '~/pages/auth/register'
const PasswordEmail = () => import('~/pages/auth/password/email')
const PasswordReset = () => import('~/pages/auth/password/reset')

const Settings = () => import('~/pages/settings/index')
const SettingsProfile = () => import('~/pages/settings/profile')
const SettingsPassword = () => import('~/pages/settings/password')

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    { 
      path: '/login', 
      name: 'login', 
      component: Login,
      meta: {
        layout: 'blank'
      }
    },
    { 
      path: '/register', 
      name: 'register', 
      component: Register,
      meta: {
        layout: 'blank'
      }
    },
    { path: '/password/reset', name: 'password.request', component: PasswordEmail },
    { path: '/password/reset/:token', name: 'password.reset', component: PasswordReset },
    
    { 
      path: '/settings', component: Settings, children: [
        { path: '', redirect: { name: 'settings.profile' }},
        { path: 'profile', name: 'settings.profile', component: SettingsProfile },
        { path: 'password', name: 'settings.password', component: SettingsPassword }
      ] 
    },

    { path: '*', component: require('~/pages/errors/404') }
  ]
})
