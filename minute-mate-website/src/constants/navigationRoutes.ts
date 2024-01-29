import { faChartLine, faClock, faCog } from '@fortawesome/free-solid-svg-icons';

export const SidebarRoutes = [
  {
    title: 'Dashboard',
    icon: faChartLine,
    url: '/dashboard',
  },
  {
    title: 'Tracker',
    icon: faClock,
    url: '/tracker',
  },
  {
    title: 'Settings',
    icon: faCog,
    url: '/settings',
  },
];
