import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import Landing from '../views/Landing.vue'
import RegisterC from '../views/auth/Register-Candidate.vue'
import RegisterR from '../views/auth/Register-Recruiter.vue'
import ResetPass from '../views/auth/Reset-Password.vue'
import ConfirmPass from '../views/auth/Confirm-Password.vue'
import Hire from '../views/Hire.vue'
import EditProfileC from '../views/Edit-Profile-C.vue'
import ProfileCandidate from '../views/ProfileCandidate.vue'
import ProfileCompany from '@/views/ProfileCompany.vue'
import Notification from '@/views/Notification.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/register-candidate',
    name: 'RegisterC',
    component: RegisterC
  },
  {
    path: '/register-recruiter',
    name: 'RegisterR',
    component: RegisterR
  },
  {
    path: '/reset-password',
    name: 'ResetPass',
    component: ResetPass
  },
  {
    path: '/confirm-password',
    name: 'ConfirmPass',
    component: ConfirmPass
  },
  {
    path: '/profile-candidate',
    name: 'ProfileCandidate',
    component: ProfileCandidate
  },
  {
    path: '/hire',
    name: 'Hire',
    component: Hire
  },
  {
    path: '/edit-profile-c',
    name: 'EditProfileR',
    component: EditProfileC
  },
  {
    path: '/profile-company',
    name: 'ProfileCompany',
    component: ProfileCompany
  },
  {
    path: '/notification',
    name: 'Notification',
    component: Notification
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
