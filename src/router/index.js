import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

// Router mudules
import componentsRouter from './modules/components'
import nestedRouter from './modules/nested'
import tableRouter from './modules/table'
import chartsRouter from './modules/chart'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   设置为true，项目将不会显示在侧边栏(默认为false)
 * alwaysShow: true               设置为true，将始终显示根菜单
 *                                如果没有设置alwaysShow，当项目有多个子路由时，它将成为嵌套模式，否则不显示根菜单
 * redirect: noRedirect           设置noRedirect将不会在面包屑中重定向
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    控制页面角色(可以设置多个角色)
    title: 'title'               显示在侧边栏和面包屑中的名称(推荐设置)
    icon: 'svg-name'/'el-icon-x' 侧边栏的图标
    breadcrumb: false            设置为false，项目将隐藏在Breadcrumb中(默认为true)
    activeMenu: '/example/list'  如果设置了路径，侧边栏将突出显示您设置的路径
  }
 */

//无权限公共访问路由
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path:'/401',
    component:()=>import('@/views/401'),
    hidden:true
  },
  {
    path:'/500',
    component:()=>import('@/views/500'),
    hidden:true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard',affix:true }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      },
      {
        path: 'form',
        name:'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      },
    ]
  },


]

//需要根据用户角色动态加载的路由
export const asyncRoutes=[
  
    componentsRouter,
    nestedRouter,
    tableRouter,
    chartsRouter,
    {
      path:'/clipboard',
      component:Layout,
      children:[
        {
          path:'index',
          component:()=>import('@/views/clipboard/index'),
          name:'ClipboardDemo',
          meta:{title:'Clipboard',icon:'clipboard'}
        }
      ]
    },
    {
      path: 'external-link',
      component: Layout,
      children: [
        {
          path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
          meta: { title: 'External Link', icon: 'link' }
        }
      ]
    },
   // 404 page must be placed at the end !!!
   { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
