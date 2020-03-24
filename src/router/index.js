import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Category from '../views/Category.vue'
import User from '../views/User.vue'
import Produce from '../views/Produce.vue'
import NoMath from '../views/NoMath.vue'
import Login from '../views/Login.vue'
import Cart from '../views/Cart.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias:['/home','/main']
  },
  {
    path: '/produce/:id',
    name: 'Produce',
    component: Produce
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta:{requireAuth:true}
  },
  {
    path: '/set',
    name: 'User',
  },
  {
    path: '/cat',
    name: 'Category',
    component:() => import(/* webpackChunkName: "category" */ '../views/Category.vue'),
    meta:{requireAuth:true}
  },
  {
    path: '*',
    name: 'NoMath',
    component: NoMath
  },
  {
  path: '/login',
  name: 'Login',
  component: Login
  },
  {
    path: '/about',//路由对应的地址
    name: 'About',//路由的名称
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }//路由对应的组件
]

const router = new VueRouter({
  routes
})
import Cookie from'../assets/js/Cookie'
router.beforeEach((to,from,next)=>{
  console.log("to:",to);
  console.log("from:",from);
  if(to.meta.requireAuth){
    if(!Cookie.getCookie("uname")){
      next("/login?redirect="+to.path);
    }else{
      next();
    }
  }else{
  next();
}
})
export default router
