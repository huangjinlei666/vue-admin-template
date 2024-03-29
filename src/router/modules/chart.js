/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: 'Charts',
  meta: {
    title: 'Charts',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: 'Keyboard Chart', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/charts/line'),
      name: 'LineChart',
      meta: { title: 'Line Chart', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/charts/mix-chart'),
      name: 'MixChart',
      meta: { title: 'Mix Chart', noCache: true }
    },
    {
        path: 'pie-chart',
        component: () => import('@/views/charts/pie-chart'),
        name: 'PieChart',
        meta: { title: 'Pie Chart', noCache: true }
    },
    {
        path: 'basic-line',
        component: () => import('@/views/charts/basic-line'),
        name: 'BasicLine',
        meta: { title: 'Basic Line', noCache: true }
    },
    {
        path: 'china-map',
        component: () => import('@/views/charts/china-map'),
        name: 'ChinaMap',
        meta: { title: 'China Map', noCache: true }
    },
  ]
}

export default chartsRouter
