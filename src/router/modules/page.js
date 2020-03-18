import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/demo',
  name: 'demo-page',
  meta,
  redirect: { name: 'demo-page1' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'page1',
      name: `${pre}page1`,
      component: _import('demo/page1/index'),
      meta: {
        ...meta,
        title: '页面1'
      }
    },
    {
      path: 'page2',
      name: `${pre}page2`,
      component: _import('demo/page2/index'),
      meta: {
        ...meta,
        title: '页面2'
      }
    },
    {
      path: 'page3',
      name: `${pre}page3`,
      component: _import('demo/page3/index'),
      meta: {
        ...meta,
        title: '页面3'
      }
    }
  ])('demo-')
}
