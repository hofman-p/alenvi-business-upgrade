
export default [
  {
    path: '/',
    component: () => import('layouts/Navigation'),
    children: [
      { path: '', component: () => import('pages/Home') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
