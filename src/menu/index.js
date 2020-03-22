// 插件
import demoBusiness from './modules/demo-business'
import header from './header'

import aside from './aside'

// 菜单 侧边栏
export const menuAside = [
    {
        path: '/index',
        title: '首页',
        icon: 'home'
      },
    demoBusiness
]

// 菜单 顶栏
export const menuHeader = [
    ...header
]
/**
 *   {
    path: '/index',
    title: '首页',
    icon: 'home'
  },
 */
