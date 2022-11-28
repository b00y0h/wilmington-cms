import { Field } from 'payload/types';

export type Type = 'tan' | 'green' | 'none' | 'purple' | 'gray';

const backgroundColor: Field = {
  name: 'backgroundColor',
  type: 'radio',
  label: 'Background Color',
  defaultValue: 'none',
  admin: {
    layout: 'horizontal',
  },
  options: [
    {
      label: 'None',
      value: 'none',
    },
    {
      label: 'Green',
      value: 'green',
    },
    {
      label: 'Purple',
      value: 'purple',
    },
    {
      label: 'Tan',
      value: 'tan',
    },
  ],
};

export default backgroundColor;
