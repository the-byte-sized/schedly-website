import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';
import type * as Redocusaurus from 'redocusaurus';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Schedly Documentation',
  tagline: 'Scheduling Made Simple.Tailored to Your Workflow',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'the-byte-sized', // Usually your GitHub org/user name.
  projectName: 'schedly-documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  stylesheets: [
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/aos/3.0.0-beta.6/aos.css",
    "https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css",
    "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
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
            spec: 'https://redocly.github.io/redoc/openapi.yaml',
            route: '/docs/restful-api/',
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
      disableSwitch: true,
    },
    navbar: {
      title: 'Schedly',
      logo: {
        alt: 'Schedly Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: "Overview",
          href: "#overview",
          position: 'left',

        },
        {
          type: 'dropdown',
          label: 'Use Cases',
          position: 'left',
          items: [
            {
              label: 'Healthcare',
              href: '/solutions/health-care',
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
              label: 'Ride Sharing Service',
              href: '/solutions/ride-sharing',
            },
            {
              label: 'Beauty Salon',
              href: '/solutions/beauty-salon',
            },
          ],
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          label: 'Join Waitlist now',
          className: "btn btn-primary text-white hvr-icon-forward hvr-shadow",
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
          title: 'Use Cases',
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
              label: 'Ride Sharing Service',
              to: '/solutions/ride-sharing',
            },
            {
              label: 'Beauty Salon',
              to: '/solutions/beauty-salon',
            },
          ],
        },
        {
          title: 'For Developers',
          items: [
            {
              label: 'Documentation',
              to: '/docs',
            },
            {
              label: 'API Reference',
              to: '/docs/api-reference',
            },
            {
              label: 'Changelog',
              to: '/docs/changelog',
            },
          ],
        },
        {
          title: 'Product',
          items: [
            {
              label: 'Why Schedly',
              to: '/docs',
            },
            {
              label: 'Features',
              to: '/docs/api-reference',
            },
            {
              label: 'Pricing',
              to: '/docs/changelog',
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
    },
  } as Preset.ThemeConfig,
};

export default config;
