const navData = [
  {
    title: "Menu 1",
    titleEnglish: "Menu 1",
    url: "",
    hasMenu: true,
    hasMegapanel: true,
    menuSections: [
      {
        heading: "The essentials",
        menuItems: [
          {
            title: "Highlighted Link 1",
            titleEnglish: "Highlighted Link 1",
            url: "",
            highlighted: true,
            megapanelContent: {
              headingTitle: "Highlighted Link 1",
              headingUrl: "",
              description:
                "Blend cloud and on-premises resources for flexibility and balance",
              quickLinks: {
                title: "",
                links: [
                  {
                    title: "Subnav 1",
                    titleEnglish: "Subnav 1",
                    highlightedLink: true,
                    url: "https://rpofp.sse.codesandbox.io/menu-1/link-0/subnav-1",
                  },
                  {
                    title: "Subnav 2",
                    titleEnglish: "Subnav 2",
                    highlightedLink: true,
                    url: "https://rpofp.sse.codesandbox.io/menu-1/link-0/subnav-2",
                  },
                ],
              },
            },
          },
          {
            title: "Link 1",
            titleEnglish: "Link 1",
            url: "https://rpofp.sse.codesandbox.io/menu-1/link-1",
            megapanelContent: {
              description: "",
              quickLinks: {
                title: "",
                links: [
                  {
                    title: "Subnav 1",
                    titleEnglish: "Subnav 1",
                    url: "https://rpofp.sse.codesandbox.io/menu-1/link-2/subnav-1",
                  },
                  {
                    title: "Subnav 2 (with same url as Subnav 3)",
                    titleEnglish: "Subnav 2 (with same url as Subnav 3)",
                    url: "https://rpofp.sse.codesandbox.io/menu-1/link-2/subnav-3",
                  },
                  {
                    title: "Subnav 3",
                    titleEnglish: "Subnav 3",
                    url: "https://rpofp.sse.codesandbox.io/menu-1/link-2/subnav-3",
                  },
                ],
              },
              feature: {
                heading: "",
                imageUrl: "",
                linkTitle: "",
                linkUrl: "",
              },
            },
          },
          {
            title: "Link 2",
            titleEnglish: "Link 2",
            url: "",
            megapanelContent: {
              headingTitle: "Link 2",
              headingUrl: "",
              description: "",
              quickLinks: {
                title: "",
                links: [
                  {
                    title: "Subnav 1",
                    titleEnglish: "Subnav 1",
                    url: "https://rpofp.sse.codesandbox.io/menu-1/link-2/subnav-1",
                  },
                  {
                    title: "Subnav 2",
                    titleEnglish: "Subnav 2",
                    url: "hhttps://rpofp.sse.codesandbox.io/menu-1/link-2/subnav-2",
                  },
                  {
                    title: "Subnav 3",
                    titleEnglish: "Subnav 3",
                    url: "https://rpofp.sse.codesandbox.io/menu-1/link-2/subnav-3",
                  },
                ],
              },
            },
          },
          {
            title: "View all Link",
            titleEnglish: "View all Link",
            url: "https://rpofp.sse.codesandbox.io/menu-1/view-all-link",
            megaPanelViewAll: true,
          },
        ],
      },
    ],
  },
  {
    title: "Menu 2",
    titleEnglish: "Menu 2",
    url: "",
    hasMenu: true,
    hasMegapanel: true,
    menuSections: [
      {
        heading: "",
        menuItems: [
          {
            title: "Link 1",
            url: "https://rpofp.sse.codesandbox.io/menu-2/link-1",
            megapanelContent: {
              headingTitle: "",
              headingUrl: "",
              description: "",
              quickLinks: {
                title: "Title",
                links: [
                  {
                    title: "Subnav 1",
                    url: "https://rpofp.sse.codesandbox.io/menu-2/subnav-1",
                  },
                  {
                    title: "Subnav 2",
                    url: "https://rpofp.sse.codesandbox.io/menu-2/subnav-2",
                  },
                  {
                    title: "Subnav 3",
                    url: "https://rpofp.sse.codesandbox.io/menu-2/subnav-3",
                  },
                  {
                    title: "Subnav 4",
                    url: "https://rpofp.sse.codesandbox.io/menu-2/subnav-4",
                  },
                ],
              },
              feature: {
                heading: "",
                imageUrl: "",
                linkTitle: "",
                linkUrl: "",
              },
            },
          },
        ],
      },
    ],
  },
  {
    title: "Menu 3",
    titleEnglish: "Menu 3",
    url: "",
    hasMenu: true,
    menuSections: [
      {
        heading: "",
        menuItems: [
          {
            title: "Link 1",
            titleEnglish: "Link 1",
            url: "https://rpofp.sse.codesandbox.io/menu-3/link-1",
          },
          {
            title: "Link 2",
            titleEnglish: "Link 2",
            url: "https://rpofp.sse.codesandbox.io/menu-3/link-2",
          },
          {
            title: "Link 3 (with same url as Link 2)",
            titleEnglish: "Link 3 (with same url as Link 2)",
            url: "https://rpofp.sse.codesandbox.io/menu-3/link-2",
          },
        ],
      },
    ],
  },
  {
    title: "Menu 4",
    titleEnglish: "Menu 4",
    url: "https://rpofp.sse.codesandbox.io/menu-4",
    hasMenu: false,
    hasMegapanel: false,
    menuSections: [],
  },
];

module.exports = navData;
