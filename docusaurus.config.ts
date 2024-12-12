import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import type * as Redocusaurus from 'redocusaurus';
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'ZenSched',
  tagline: 'Scheduling Made Simple.Tailored to Your Workflow',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://schedly.thebytesized.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'the-byte-sized', // Usually your GitHub org/user name.
  projectName: 'schedly-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it'],
  },

  stylesheets: [
    "https://cdnjs.cloudflare.com/ajax/libs/aos/3.0.0-beta.6/aos.css",
    "https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css",
    "https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap",
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'datetime',
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
        gtag: {
          trackingID: 'G-TD0DJ68RLE',
        },
      } as Preset.Options,
    ],
    // Redocusaurus config
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          // You can also pass it a OpenAPI spec URL
          {
            spec: 'https://schedly-api.onrender.com/swagger.json',
            route: '/restful-api-reference',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ] as Redocusaurus.PresetEntry,
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'ZenSched',
      logo: {
        alt: 'ZenSched Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Solutions',
          position: 'left',
          className: 'wide-dropdown',
          items: [
            {
              label: 'Healthcare',
              href: '/solutions/healthcare',
            },
            {
              label: 'Education',
              href: '/solutions/education',
            },
            {
              label: 'Co-working Space Management',
              href: '/solutions/coworking-space-management',
            },
            {
              label: 'Restoration & Food Delivery',
              href: '/solutions/restoration-and-food-delivery',
            },
            {
              label: 'Beauty Salon',
              href: '/solutions/beauty-salons',
            },
          ],
        },
        {
          type: 'dropdown',
          label: 'Developers',
          position: 'left',
          className: 'wide-dropdown',
          items: [
            {
              type: 'doc',
              docId: 'intro/welcome',
              label: 'Overview',
            },
            {
              type: 'doc',
              docId: 'intro/welcome',
              label: 'Documentation',
            },
            {
              href: '/restful-api-reference',
              label: 'API Reference',
            },
            {
              type: 'doc',
              docId: 'intro/welcome',
              label: 'Resources',
            }
          ],
        },
        {
          label: 'FAQ',
          position: 'left',
          to: 'faq'
        },
        {
          label: 'Help',
          position: 'left',
          to: 'help'
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          label: 'Join Waitlist now',
          id: 'join-waitlist-navbar-button',
          className: "text-white hvr-icon-forward hvr-shadow",
          position: 'right',
          href: 'https://forms.office.com/r/8LmMHy2bUF',
          target: "_blank"
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Solutions',
          items: [
            {
              label: 'Healthcare',
              to: '/solutions/healthcare',
            },
            {
              label: 'Education',
              to: '/solutions/education',
            },
            {
              label: 'Co-working Space Management',
              to: '/solutions/coworking-space-management',
            },
            {
              label: 'Restoration & Food Delivery',
              to: '/solutions/restoration-and-food-delivery',
            },
            {
              label: 'Beauty Salon',
              to: '/solutions/beauty-salons',
            },
          ],
        },
        {
          title: 'For Developers',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro/welcome',
            },
            {
              label: 'API Reference',
              to: '/docs/intro/welcome',
            },
            {
              label: 'Changelog',
              to: '/docs/intro/welcome',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'Why ZenSched',
              to: '/docs/intro/welcome',
            },
            {
              label: 'Features',
              to: '/docs/intro/welcome',
            },
            {
              label: 'Pricing',
              to: '/docs/intro/welcome',
            },

          ],
        },
        {
          title: 'Company',
          items: [
            {
              label: 'About Us',
              to: '/',
            },
            {
              label: 'Get In Touch',
              to: '/',
            },
            {
              label: 'Privacy',
              to: '/',
            },
            {
              label: 'Terms & Condition',
              to: '/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Byte-sized.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash'],
    },
  } as Preset.ThemeConfig,
};

export default config;
