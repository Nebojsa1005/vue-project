import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Edit from '../views/Home/pages/Edit/Edit.vue'
import PostDetails from '../views/Home/pages/PostDetails/PostDetails.vue'
import PostsList from '../views/Home/pages/Posts/Posts.vue'
import Create from '../views/Create/Create.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/posts',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Home',
        component: PostsList
      },
      {
        path: '/posts/:id',
        name: 'PostDetails',
        component: PostDetails
      },
      {
        path: '/posts/:id/edit',
        name: 'Edit',
        component: Edit
      }
    ]
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '**',
    redirect: '/posts'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
