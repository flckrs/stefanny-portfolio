import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

window.addEventListener('scroll', function() {
  // Get the current scroll position.
  let scrollY = window.scrollY;
  
  // Check if the .home-2-wrapper element exists in the DOM.
  const home2Wrapper = document.querySelector('#home-2-wrapper');
    if (home2Wrapper) {
    home2Wrapper.style.left = (scrollY * -0.35) + 'px';
    
    // Keep the `.home-2-wrapper` element located at `left = -75px` when the user scrolls to the top of the page.
    if (scrollY === 0) {
      home2Wrapper.style.left = '-35px';
    }
  }
});