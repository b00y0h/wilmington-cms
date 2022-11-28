import { Block } from 'payload/types';

const TestimonyBlock: Block = {
  slug: 'testimonyBlock',
  labels: {
    singular: 'Testimony Block',
    plural: 'Testimony Blocks',
  },
  imageURL: 'https://i.imgur.com/veY5rLs.png',
  fields: [
    {
      name: 'testimony',
      label: 'Testimony(s)',
      type: 'relationship',
      relationTo: 'testimonial',
    },
  ],
};

export default TestimonyBlock;
