import { CollectionConfig } from 'payload/types';

const StudentOrganization: CollectionConfig = {
  slug: 'student-organizations',
  labels: {
    singular: 'Student Organization',
    plural: 'Student Organizations',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'id', 'archived'],
    group: 'Programs',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      localized: true,
    },
    {
      name: 'quickFact',
      type: 'richText',
      admin: {
        elements: ['link', 'ol', 'ul'],
      },
    },
  ],
  timestamps: false,
};

export default StudentOrganization;
