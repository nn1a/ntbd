export const sidebarMenuItems = [
  {
    label: 'Home',
    href: '/home',
  },
  {
    label: 'About',
    // href: "/about",
    subItems: [
      {
        label: 'Grid',
        href: '/about/grid',
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
