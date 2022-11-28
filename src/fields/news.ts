import { Field } from 'payload/types';

export const newsFields: Field[] = [
  {
    name: 'excerpt',
    type: 'text',
  },
  {
    name: 'content',
    type: 'richText',
  },
  {
    name: 'status',
    type: 'select',
    options: [
      {
        value: 'draft',
        label: 'Draft',
      },
      {
        value: 'published',
        label: 'Published',
      },
    ],
    defaultValue: 'draft',
    admin: {
      position: 'sidebar',
    },
  },
];
