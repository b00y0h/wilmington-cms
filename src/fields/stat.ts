import { Field } from 'payload/types';

export type Type = {
  stat: string;
  description: string;
  extendedDescription: string;
};

const stat: Field = {
  type: 'row',
  fields: [
    {
      name: 'stat',
      label: 'Statistic',
      type: 'text',
      admin: {
        width: '50%',
      },
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      admin: {
        width: '50%',
      },
    },
    {
      name: 'extendedDescription',
      label: 'Extended Description',
      type: 'richText',
      admin: {
        width: '100%',
      },
    },
  ],
};

export default stat;
