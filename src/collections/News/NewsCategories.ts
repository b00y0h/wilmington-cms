import { CollectionConfig } from 'payload/types';

const NewsCategories: CollectionConfig = {
  slug: 'newscategories',
  labels: {
    singular: 'News Category',
    plural: 'News Categories',
  },
  admin: {
    defaultColumns: ['name'],
    useAsTitle: 'name',
    group: 'News',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: false,
};

export default NewsCategories;
