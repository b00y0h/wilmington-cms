import { Block } from 'payload/types';

export const FacultyBlock: Block = {
  slug: 'facultyBlock',
  labels: {
    singular: 'Faculty',
    plural: 'Faculty Members',
  },
  fields: [
    {
      name: 'title',
      type: 'relationship',
      relationTo: 'faculty',
      required: true,
    },
  ],
};
