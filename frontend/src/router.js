import Vue from 'vue'
import Router from 'vue-router'
// import { signup } from '../../backend/controllers/user'
import home from './components/Home.vue'
import login from './components/Login.vue'
import signup from './components/Signup.vue'
import page from './components/Page.vue'
import comment from './components/Comment.vue'
// import addcomment from './components/AddComment.vue'
import postcomponent from './components/PostComponent.vue'


Vue.use (Router)

export default new Router ({
  mode: 'history',
  routes: [
    {path:'/', component: home},
    {path:'/login', component: login},
    {path:'/signup', component: signup},
    {path:'/comment', component: comment},
    {path:'/page', component: page},
    // {path:'/comment/:_id', component: addcomment},
    {path:'/postcomponent', component: postcomponent}
  ]
})
