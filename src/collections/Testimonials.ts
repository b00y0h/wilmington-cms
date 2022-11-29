import { CollectionConfig } from 'payload/types';
import { Type as MediaType } from './Media';

export type Type = {
  author: string;
  testimonial: string;
  title: string;
  media: MediaType;
};

const Testimonial: CollectionConfig = {
  slug: 'testimonial',
  admin: {
    useAsTitle: 'author',
    defaultColumns: ['author', 'title', 'testimonial'],
  },
  fields: [
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      admin: {
        description:
          "The title of the person giving the testimonial (i.e. Agriculture , '17)",
      },
    },
    {
      name: 'testimonial',
      type: 'text',
      required: true,
    },

    {
      name: 'media',
      label: 'Author Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};

export default Testimonial;
