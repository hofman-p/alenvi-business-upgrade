
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
      {
        path: 'compagnie',
        component: () => import('pages/Company'),
        meta: {
          breadcrumb: 'Compagnie et stimulation',
          name: 'compagnie'
        }
      },
      {
        path: 'sortie-hopital',
        component: () => import('pages/HospitalExit'),
        meta: {
          breadcrumb: "Sortie d'hôpital",
          name: 'sortie-hopital'
        }
      },
      {
        path: 'mentions',
        component: () => import('pages/LegalNotices'),
        meta: {
          breadcrumb: 'Mentions Légales',
          name: 'mentions'
        }
      },
      {
        path: 'recrutement',
        component: () => import('pages/Recruitment'),
        meta: {
          breadcrumb: 'Recrutement',
          name: 'recrutement'
        }
      },
      {
        path: 'envie',
        component: () => import('pages/Recruitment'),
        meta: {
          breadcrumb: 'Recrutement',
          name: 'recrutement'
        }
      },
      {
        path: 'contrat',
        component: () => import('pages/Recruitment'),
        meta: {
          breadcrumb: 'Recrutement',
          name: 'recrutement'
        }
      },
      {
        path: 'vision',
        component: () => import('pages/Vision'),
        meta: {
          breadcrumb: 'Vision',
          name: 'vision'
        }
      },
      {
        path: 'equipe',
        component: () => import('pages/Team'),
        meta: {
          breadcrumb: 'Equipe',
          name: 'team'
        }
      },
      {
        path: 'charte-beneficiaire',
        beforeEnter: (to, from, next) => {
          window.location = 'https://blog.alenvi.io/charte-envie';
        }
      },
      {
        path: 'charte-envie',
        beforeEnter: (to, from, next) => {
          window.location = 'http://blog.alenvi.io/charte-envie';
        }
      }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
