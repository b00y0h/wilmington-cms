import { CollectionConfig, FieldHook } from 'payload/types';

const formatFullName: FieldHook = async ({ data, value }) => {
  // console.log(
  //   '🚀 ~ file: Faculty.ts ~ line 4 ~ constformatFullName:FieldHook= ~ data, value',
  //   data,
  //   value
  // );
  return data?.firstName + ' ' + data?.lastName ?? value;
};

const Faculty: CollectionConfig = {
  slug: 'faculty',
  labels: {
    singular: 'Faculty',
    plural: 'Faculty',
  },
  admin: {
    defaultColumns: ['fullName', 'firstName', 'lastName'],
    useAsTitle: 'fullName',
    group: 'Programs',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'fullName',
          type: 'text',
          label: 'Full Name',
          admin: {
            hidden: true,
          },
          hooks: {
            beforeChange: [formatFullName],
          },
        },
        {
          name: 'firstName',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'lastName',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'profilePhoto',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'relationshipToProgram',
      label: "What is this faculty member's relationship to programs",
      type: 'relationship',
      relationTo: 'programs',
      hasMany: true,
    },
    {
      name: 'bio',
      type: 'richText',
    },
    {
      name: 'contactInfo',
      type: 'group',
      fields: [
        {
          name: 'email',
          type: 'email',
          //   validate: value => {
          //     // email address must have wilmington.edu domain
          //     const emailRegex = /@wilmington.edu$/;
          //     if (!emailRegex.test(value)) {
          //       return 'Email address must have wilmington.edu domain';
          //     }
          //     return true;
          //   },
          admin: {
            placeholder: 'your-user-name@wilmington.edu',
          },
        },
        {
          name: 'phone',
          type: 'text',
        },
        {
          name: 'position',
          type: 'text',
        },
        {
          name: 'location',
          type: 'select',
          options: [
            {
              value: 'wilmington',
              label: 'Wilmington',
            },
            {
              value: 'cincinnati',
              label: 'Cincinnati',
            },
            {
              value: 'virtual',
              label: 'Virtual',
            },
          ],
          defaultValue: 'wilmington',
        },
        {
          name: 'curriculumVitae',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'socialMedia',
      type: 'group',
      fields: [
        {
          name: 'facebook',
          type: 'text',
        },
        {
          name: 'instagram',
          type: 'text',
        },
        {
          name: 'youtube',
          type: 'text',
        },
        {
          name: 'linkedin',
          type: 'text',
        },
        {
          name: 'twitter',
          type: 'text',
        },
      ],
    },
  ],
};

export default Faculty;
