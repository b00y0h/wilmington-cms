const path = require('path');

import { buildConfig } from 'payload/config';
import seo from '@payloadcms/plugin-seo';

import Categories from './src/collections/Categories';
import Posts from './src/collections/Posts';
import Tags from './src/collections/Tags';
import News from './src/collections/News/News';
import NewsCategories from './src/collections/News/NewsCategories';
import Events from './src/collections/Events/Events';
import EventsCategories from './src/collections/Events/EventsCategories';
import Users from './src/collections/Users';
import Pages from './src/collections/Pages';
import Faculty from './src/collections/Faculty';
import Media from './src/collections/Media';
import Programs from './src/collections/Programs';
import Statistics from './src/collections/Statistic';
import StudentOrganization from './src/collections/Programs/Organizations';
import { Header } from './src/globals/Header';
import Nav from './src/globals/Nav';
import AfterDashboard from './src/components/AfterDashboard';
import Testimonials from './src/collections/Testimonials';
import Logo from './src/admin/components/Logo';
import Icon from './src/admin/components/Icon';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
    components: {
      afterDashboard: [AfterDashboard],
      graphics: {
        Logo: Logo,
        Icon: Icon,
      },
    },
  },
  // globals: [Header, Nav],
  collections: [
    Pages,
    Posts,
    Categories,
    Tags,
    News,
    NewsCategories,
    Events,
    EventsCategories,
    Statistics,
    Testimonials,
    Media,
    Programs,
    Faculty,
    StudentOrganization,
    Users,
  ],
  plugins: [
    seo({
      collections: ['pages', 'posts', 'programs', 'events', 'news'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => doc.title.value,
      generateDescription: ({ doc }) => doc?.excerpt?.value,
      generateURL: ({ doc }) => `https://wilmington.edu/${doc?.slug?.value}`,
      generateImage: ({ doc }) => doc?.background?.value,
      tabbedUI: false,
    }),
  ],
  typescript: {
    outputFile: path.resolve(__dirname, './generated-types.ts'),
  },
});
