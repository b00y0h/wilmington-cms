import { CollectionConfig, FieldHook } from 'payload/types';
import link from '../fields/link';

const formatFullDescription: FieldHook = async ({ data, value }) => {
  return data?.stat + ' ' + data?.description ?? value;
};

export type Type = {
  stat: string;
  description: string;
  extendedDescription: string;
  relatedLink: string;
};

const Statistic: CollectionConfig = {
  slug: 'statistic',
  admin: {
    useAsTitle: 'combinedStat',
  },
  fields: [
    {
      name: 'combinedStat',
      type: 'text',
      label: 'Combined Stat',
      admin: {
        hidden: true,
      },
      hooks: {
        beforeChange: [formatFullDescription],
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'stat',
          label: 'Statistic',
          type: 'text',
          required: true,
          admin: {
            width: '25%',
          },
        },
        {
          name: 'description',
          label: 'Description',
          type: 'text',
          required: true,
          admin: {
            width: '75%',
          },
        },
      ],
    },
    {
      name: 'extendedDescription',
      label: 'Extended Description',
      type: 'richText',
    },
    link,
  ],
};

export default Statistic;
