const EventsCategories = {
  slug: 'eventscategories',
  labels: {
    singular: 'Events Category',
    plural: 'Events Categories',
  },
  admin: {
    defaultColumns: ['name'],
    useAsTitle: 'name',
    group: 'Events',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: false,
};

export default EventsCategories;
