/* jshint -W033 */
/* jshint -W024 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueGtag from 'vue-gtag'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      title: 'Vitaliy Ostapchuk',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of Vitaliy`s portfolio.'
        }
      ]
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/AppHome.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutMe.vue')
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import('../views/MyWork.vue')
  },
  {
    path: '/education',
    name: 'Education',
    component: () => import('../views/MyEducation.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('../views/MyProjects.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/MyContact.vue')
  },
  {
    path: '/thanks',
    name: 'SubmissionSuccess',
    component: () => import('../components/SubmissionSuccess.vue')
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import('../views/Impressum.vue')
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('../views/PrivacyPolicy.vue')
  },
  {
    path: '/terms-of-service',
    name: 'TermsOfService',
    component: () => import('../views/TermsOfService.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../components/NotFound.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name) {
    document.title = 'Vitaliy Ostapchuk - ' + to.name
  } else if (to.meta) {
    document.title = to.meta.title
  } else {
    document.title = 'Vitaliy Ostapchuk'
  }
  next()
})

Vue.use(
  VueGtag,
  {
    config: {
      id: 'UA-41251044-2'
    }
  },
  router
)

export default router
