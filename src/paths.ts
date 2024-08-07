export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/account',
    customers: '/dashboard/customers',
    integrations: '/dashboard/integrations',
    settings: '/dashboard/settings',
    form:'/dashboard/form',
    appointment:'dashboard/appointment',
    employee: '/dashboard/employee',
    services: '/dashboard/service',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
