export default {
  title: "V-Role Plugin",
  description: "Just playing around.",
  themeConfig: {
    base: "/v-role/",
    siteTitle: "V-Role Plugin",
    nav: [
      { text: "Guide", link: "/introduction/" },
      { text: "API", link: "/concepts/api" },
      { text: "GitHub", link: "https://github.com/GrandWin/v-role" },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "What is v-role?", link: "/introduction/" },
          { text: "Getting Started", link: "/introduction/getting-started" },
        ],
      },
      {
        text: "Core Concepts",
        items: [
          { text: "Setting Roles", link: "/concepts/setting-roles" },
          { text: "Directives", link: "/concepts/directives" },
          { text: "Component", link: "/concepts/component" },
          { text: "API", link: "/concepts/api" },
        ],
      },
    ],
    footer: {
      message:
        '<a href="https://github.com/GrandWin/v-role/blob/main/LICENCE">MIT Licensed</a> | Copyright © 2022 <a href="https://github.com/GrandWin">Nikita Vologzhin</a>',
    },
  },
};
