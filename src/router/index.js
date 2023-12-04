import { createRouter, createWebHistory } from 'vue-router'
import welcome from '../views/welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import geoLocation from '../views/geoLocation.vue'
import '../assets/main.css'
import { projectAuth } from '../firebase/config.js'

// authentication guard
// then use this func on whatever component you want to prevent
// prop is beforeEnter: requireAuth
// to, from, next are determined automatically by beforeEnter:
const requireAuth =(to, from, next)=>{
  const user = projectAuth.currentUser

  // no user logged
  if(!user){
    next({name:'home'})
  }
  else{
    next()
  }
}

const requireNoAuth =(to, from, next)=>{
  const user = projectAuth.currentUser

  //user logged
  if(user){
    next({name:'Chatroom'})
  }
  else{
    next()
  }
}

const routes = [
  {
    path:'/',
    name:'home',
    component: welcome,
    beforeEnter: requireNoAuth
  }, 
  {
    path:'/chatroom',
    name:'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth
  },
  {
    path:'/geoLocation',
    name:'geoLocation',
    component: geoLocation,
    beforeEnter: requireAuth
  },
]

const router = createRouter({
  history : createWebHistory(process.env.BASE_URL),
  routes
})

export default router
