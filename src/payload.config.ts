const path = require('path');

import { buildConfig } from 'payload/config';
import seo from '@payloadcms/plugin-seo';

import Categories from './collections/Categories';
import Posts from './collections/Posts';
import Tags from './collections/Tags';
import News from './collections/News/News';
import NewsCategories from './collections/News/NewsCategories';
import Events from './collections/Events/Events';
import EventsCategories from './collections/Events/EventsCategories';
import Users from './collections/Users';
import Pages from './collections/Pages';
import Faculty from './collections/Faculty';
import Media from './collections/Media';
import Programs from './collections/Programs';
import Statistics from './collections/Statistic';
import StudentOrganization from './collections/Programs/Organizations';
import { Header } from './globals/Header';
import Nav from './globals/Nav';
import AfterDashboard from './components/AfterDashboard';
import Testimonials from './collections/Testimonials';
import Logo from './admin/components/Logo';
import Icon from './admin/components/Icon';

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
      // generateTitle: ({ doc }) => doc.title.value,
      // generateDescription: ({ doc }) => doc?.excerpt?.value,
      // generateURL: ({ doc }) => `https://wilmington.edu/${doc?.slug?.value}`,
      // generateImage: ({ doc }) => doc?.background?.value,
      tabbedUI: false,
    }),
  ],
  typescript: {
    outputFile: path.resolve(__dirname, './generated-types.ts'),
  },
});
