export default {
    path: '/demo',
    title: '演示页面',
    icon: 'flask',
    children: (pre => [
      { path: `${pre}page1`, title: '页面1', icon: 'home' },
      { path: `${pre}page2`, title: '页面2', icon: 'home' },
      { path: `${pre}page3`, title: '页面3', icon: 'home' }
    ])('/demo/')
  }
  