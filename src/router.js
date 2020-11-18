import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('./views/Portfolio.vue')
    },
    {
      path: '/website-development',
      name: 'WebDev',
      component: () => import('./views/WebDev.vue')
    },
    {
      path: '/website-design',
      name: 'WebDev',
      component: () => import('./views/WebDesign.vue')
    },
    {
      path: '/application-development',
      name: 'WebDev',
      component: () => import('./views/AppDev.vue')
    },
    {
      path: '/search-engine-optimization',
      name: 'WebDev',
      component: () => import('./views/seo.vue')
    },
    {
      path: '/web-scraping',
      name: 'WebDev',
      component: () => import('./views/webscraping.vue')
    },
    {
      path: '/social-media-marketing',
      name: 'WebDev',
      component: () => import('./views/SocialMedia.vue')
    },
    {
      path: '/website-maintenance',
      name: 'WebDev',
      component: () => import('./views/webMaintenance.vue')
    },
    {
      path: '/databases',
      name: 'WebDev',
      component: () => import('./views/database.vue')
    },
    {
      path: '/content-writing',
      name: 'WebDev',
      component: () => import('./views/content-writing.vue')
    },
    {
      path: '/policy',
      name: 'Policy',
      component: () => import('./views/policy.vue')
    },
    {
      path: '/terms-conditions',
      name: 'terms-conditions',
      component: () => import('./views/terms-conditions.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/About.vue')
    },
    
    {
      path: '/services',
      name: 'Services',
      component: () => import('./views/Services.vue')
    },
    {
      path: '/testimonials',
      name: 'Testimonials',
      component: () => import('./views/testimonials.vue')
    }
   
  ]
})
