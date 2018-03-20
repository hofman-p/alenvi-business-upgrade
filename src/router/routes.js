
export default [
  {
    path: '/',
    component: () => import('layouts/Navigation'),
    children: [
      { path: '', component: () => import('pages/index') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
