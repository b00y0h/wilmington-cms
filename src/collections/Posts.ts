import { CollectionConfig } from 'payload/types';
import { pageAndPostFields } from '../fields/page-post';

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    defaultColumns: ['title', 'author', 'category', 'tags', 'status'],
    useAsTitle: 'slug',
  },
  access: {
    read: () => true,
  },
  fields: [
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
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
    },
    {
      name: 'publishedDate',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    ...pageAndPostFields,
  ],
};

export default Posts;
