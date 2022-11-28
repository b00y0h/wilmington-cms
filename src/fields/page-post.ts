import { Field } from 'payload/types';

export const pageAndPostFields: Field[] = [
  {
    name: 'title',
    type: 'text',
    required: true,
  },
  {
    name: 'excerpt',
    type: 'text',
  },
  {
    name: 'category',
    type: 'relationship',
    relationTo: 'categories',
  },
  {
    name: 'tags',
    type: 'relationship',
    relationTo: 'tags',
    hasMany: true,
  },
  {
    name: 'hero',
    type: 'group',
    fields: [
      {
        name: 'type',
        type: 'radio',
        options: [
          {
            label: 'Basic',
            value: 'basic',
          },
          {
            label: 'Fullscreen',
            value: 'fullscreen',
          },
        ],
      },
      {
        name: 'content',
        type: 'richText',
        required: true,
        admin: {
          elements: ['h1', 'h4', 'link'],
          leaves: [],
        },
      },
      {
        name: 'background',
        type: 'upload',
        relationTo: 'media',
        required: true,
        admin: {
          condition: (_, { type }) => {
            return type === 'fullscreen';
          },
        },
      },
    ],
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
