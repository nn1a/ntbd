export const sidebarMenuItems = [
  {
    label: 'Home',
    href: '/home',
  },
  {
    label: 'Components',
    // href: "/components",
    subItems: [
      {
        label: 'Grid',
        href: '/components/grid',
      },
      {
        label: 'Graph',
        href: '/components/graph',
      },
      {
        label: 'Table',
        href: '/components/table',
      },
      {
        label: 'Sub 3Depth',
        // href: "/components/sub",
        subItems: [
          {
            label: 'History',
            href: '/components/sub/dummy',
          },
          {
            label: 'Mission',
            href: '/components/sub/dummy1',
          },
        ],
      },
    ],
  },
];
