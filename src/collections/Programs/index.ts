import react from 'react';
import { CollectionConfig } from 'payload/types';
import { Content, Type as ContentType } from '../../blocks/Content';
import { Media, Type as MediaBlockType } from '../../blocks/Media';
import Statistics, {
  Type as StatisticsType,
} from '../../blocks/StatisticBlock';
import Testimony from '../../blocks/TestimonyBlock';

import Spacer, { Type as SpacerType } from '../../blocks/Spacer';
import CallToAction, {
  Type as CallToActionType,
} from '../../blocks/CallToAction';
import Slider, { Type as SliderType } from '../../blocks/Slider';
import CTAGrid, { Type as CTAGridType } from '../../blocks/CTAGrid';
import MediaContentBlock, {
  Type as MediaContentBlockType,
} from '../../blocks/MediaContentBlock';

export type Layout =
  | CallToActionType
  | ContentType
  | CTAGridType
  | MediaBlockType
  | SliderType
  | SpacerType
  | StatisticsType
  | MediaContentBlockType;

export type Type = {
  title: string;
  slug: string;
  layout: Layout[];
};

const Programs: CollectionConfig = {
  slug: 'programs',
  admin: {
    defaultColumns: ['title'],
    useAsTitle: 'title',
    group: 'Programs',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [
        CallToAction,
        Content,
        CTAGrid,
        Media,
        Slider,
        Spacer,
        Statistics,
        Testimony,
        MediaContentBlock,
      ],
    },
    {
      name: 'studentOrganizations',
      label: 'Student Organization Relationship',
      type: 'group',
      fields: [
        {
          name: 'studentOrganizations',
          label: 'Student Organizations',
          type: 'relationship',
          hasMany: true,
          relationTo: 'student-organizations',
        },
        {
          name: 'includeSidebarCopy',
          label: 'Include Sidebar Copy?',
          type: 'checkbox',
        },
        {
          name: 'sidebarCopy',
          label: 'Sidebar Copy',
          type: 'richText',
          admin: {
            elements: [
              'h2',
              'h3',
              'h4',
              'h5',
              'h6',
              'ul',
              'ol',
              'upload',
              'link',
            ],
            leaves: ['bold', 'italic'],
            condition: (_, siblingData) => siblingData.includeSidebarCopy,
          },
        },
      ],
    },
    {
      name: 'relatedFaculty',
      label: 'Related Faculty',
      type: 'group',
      fields: [
        {
          name: 'faculty',
          label: 'Faculty Members to Highlight',
          type: 'relationship',
          hasMany: true,
          relationTo: 'faculty',
        },
        {
          name: 'Faculty Spotlight',
          label: 'Faculty Spotlight',
          type: 'richText',
          admin: {
            elements: ['link'],
            leaves: ['bold', 'italic'],
          },
        },
      ],
    },
    {
      name: 'relatedNews',
      label: 'Related News Category',
      type: 'relationship',
      relationTo: 'newscategories',
    },
    {
      name: 'relatedEvents',
      label: 'Related Events Category',
      type: 'relationship',
      relationTo: 'eventscategories',
    },
  ],
};

export default Programs;
