export const sidebarMenuItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    // href: "/about",
    subItems: [
      {
        label: 'Team',
        href: '/about/team',
      },
      {
        label: 'Company',
        // href: "/about/company",
        subItems: [
          {
            label: 'History',
            href: '/about/company/history',
          },
          {
            label: 'Mission',
            href: '/about/company/mission',
          },
        ],
      },
    ],
  },
];
