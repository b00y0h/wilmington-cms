import { GlobalConfig } from 'payload/types';

export const Header: GlobalConfig = {
  slug: 'header',
  admin: {
    group: 'Admin',
  },
  fields: [
    // field for the logo
    {
      name: 'logo',
      type: 'upload',
      required: true,
      relationTo: 'media',
    },
  ],
};
