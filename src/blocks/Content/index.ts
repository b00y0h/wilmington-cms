import { Block } from 'payload/types';
import backgroundColor, {
  Type as BackgroundColorType,
} from '../../fields/backgroundColor';
import HR from '../../components/RichText/elements/HR';

export type ColumnWidth = 'oneThird' | 'half' | 'twoThirds' | 'full';

export type Alignment = 'left' | 'center' | 'right';

export type PaddingSize = 'none' | 'small' | 'medium' | 'large';

export type Column = {
  content: unknown;
  width: ColumnWidth;
  alignment: Alignment;
};

export type Type = {
  blockType: 'content';
  blockName?: string;
  columns: Column[];
};

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Content',
    plural: 'Content Blocks',
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      minRows: 1,
      labels: {
        singular: 'Column',
        plural: 'Columns',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'width',
              label: 'Column Width',
              type: 'select',
              defaultValue: 'full',
              required: true,
              options: [
                {
                  label: 'One Third',
                  value: 'oneThird',
                },
                {
                  label: 'Half',
                  value: 'half',
                },
                {
                  label: 'Two Thirds',
                  value: 'twoThirds',
                },
                {
                  label: 'Full Width',
                  value: 'full',
                },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              name: 'alignment',
              label: 'Alignment',
              type: 'select',
              defaultValue: 'left',
              required: true,
              options: [
                {
                  label: 'Left',
                  value: 'left',
                },
                {
                  label: 'Center',
                  value: 'center',
                },
                {
                  label: 'Right',
                  value: 'right',
                },
              ],
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
          admin: {
            elements: ['h2', 'h3', 'h4', 'h5', 'ul', 'ol', 'link'],
          },
        },
        {
          name: 'readMoreBoolean',
          label: 'Read More?',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description:
              'If checked, a "Read More" button will be added and addtional text will be displayed.',
          },
        },
        {
          name: 'readMore',
          label: 'Read More',
          type: 'richText',
          admin: {
            condition: (_, siblingData) => siblingData?.readMoreBoolean,
            elements: ['link', 'ul', 'ol'],
          },
        },
      ],
    },
  ],
};

export default Content;
