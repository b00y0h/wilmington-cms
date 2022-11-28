import { CollectionConfig } from 'payload/types';
import { newsFields } from '../../fields/news';

const News: CollectionConfig = {
  slug: 'news',
  admin: {
    defaultColumns: ['title', 'author', 'category', 'tags', 'status'],
    useAsTitle: 'slug',
    group: 'News',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      label: 'Unique Slug',
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    ...newsFields,
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'newscategories',
    },
  ],
};

export default News;
