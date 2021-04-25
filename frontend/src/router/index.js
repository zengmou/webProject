import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import HelloWorld from '@/components/HelloWorld'

import Menu from '@/components/Menu'



Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [    
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu,
      meta:{
        requireAuth:true
      }
    },
  ]
});


// 前端登录拦截
// router.beforeEach(function (to, from ,next) {
//   if (to.matched.some(record => record.meta.requireAuth)) {
//     if (window.localStorage.hasOwnProperty('token')) {
//       next()
//     } else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath} // 登录成功之后重新跳转到该路由
//       })
//     }
//   } else {
//     next()
//   }
// });

// router.beforeEach(function (to, from ,next) {
//   if (to.matched.some(record => record.meta.requireAuth)) {
//     this.$axios.post(to.fullPath).then(res =>{
//       if(res.status===200){
//         next();
//       }
//       else {
//         next({
//           path: '/login',
//           query: {redirect: to.fullPath} // 登录成功之后重新跳转到该路由
//         })
//       }
//     }) 
//   } 
//   else {
//     next()
//   }
// });

