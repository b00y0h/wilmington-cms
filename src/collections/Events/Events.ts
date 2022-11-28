import { CollectionConfig } from 'payload/types';
import link from '../../fields/link';
import { newsFields } from '../../fields/news';

const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    defaultColumns: ['title', 'author', 'category', 'tags', 'status'],
    useAsTitle: 'title',
    group: 'Events',
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
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'timeAndDate',
      label: 'Time & Date',
      type: 'group',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'startDate',
              type: 'date',
              required: true,
              admin: {
                condition: (_, siblingData) => Boolean(!siblingData.allDay),
                width: '50%',
              },
            },
            {
              name: 'endDate',
              type: 'date',
              required: true,
              admin: {
                condition: (_, siblingData) => Boolean(!siblingData.allDay),
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'allDayDate',
          label: 'Event Date',
          type: 'date',
          required: true,
          admin: {
            condition: (_, siblingData) => Boolean(siblingData.allDay),
            date: {
              pickerAppearance: 'dayOnly',
            },
          },
        },
        {
          name: 'allDay',
          label: 'All Day Event?',
          type: 'checkbox',
        },
      ],
    },
    link,
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'eventscategories',
    },
  ],
};

export default Events;
