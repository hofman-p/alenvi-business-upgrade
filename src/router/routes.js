
export default [
  {
    path: '/',
    component: () => import('layouts/Navigation'),
    children: [
      { path: '', component: () => import('pages/Home') },
      {
        path: 'aide-a-domicile',
        component: () => import('pages/HomeCare'),
        meta: {
          breadcrumb: 'Aide à domicile',
          name: 'aide-a-domicile'
        }
      },
      { path: '/compagnie', component: () => import('pages/Company') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
