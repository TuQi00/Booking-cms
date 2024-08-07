import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'customers', title: 'Customers', href: paths.dashboard.customers, icon: 'users' },
  { key: 'integrations', title: 'Integrations', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
  { key: 'form', title: 'Form', href: paths.dashboard.form, icon: 'table' },
  { key: 'appointment', title: 'Appointment', href: paths.dashboard.appointment, icon: 'calendar' },
  { key: 'employee', title: 'Users', href: paths.dashboard.employee, icon: 'person' },
  { key: 'service', title: 'Services', href: paths.dashboard.services, icon: 'list' },
  { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },


] satisfies NavItemConfig[];
