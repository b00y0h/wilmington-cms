import { CollectionConfig } from 'payload/types';
import { Type as MediaType } from './Media';
import slug from '../fields/slug';
import meta, { Type as MetaType } from '../fields/meta';
import { Content, Type as ContentType } from '../blocks/Content';
import { Media, Type as MediaBlockType } from '../blocks/Media';
import Statistics, { Type as StatisticsType } from '../blocks/StatisticBlock';
import Spacer, { Type as SpacerType } from '../blocks/Spacer';
import StickyContent, {
  Type as StickyContentType,
} from '../blocks/StickyContent';
import CallToAction, { Type as CallToActionType } from '../blocks/CallToAction';
import Slider, { Type as SliderType } from '../blocks/Slider';
import CTAGrid, { Type as CTAGridType } from '../blocks/CTAGrid';

export type Layout =
  | CallToActionType
  | ContentType
  | CTAGridType
  | MediaBlockType
  | SliderType
  | SpacerType
  | StatisticsType
  | StickyContentType;

export type HeroType = 'minimal' | 'contentAboveMedia' | 'contentLeftOfMedia';

export type Type = {
  title: string;
  heroType: 'minimal' | 'contentAboveMedia' | 'contentLeftOfMedia';
  heroContent: unknown;
  heroMedia?: MediaType;
  slug: string;
  image?: MediaType;
  layout: Layout[];
  meta: MetaType;
};

const Page: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    {
      type: 'radio',
      name: 'heroType',
      label: 'Hero Type',
      required: true,
      defaultValue: 'minimal',
      options: [
        {
          label: 'Minimal',
          value: 'minimal',
        },
        {
          label: 'Content Above Media',
          value: 'contentAboveMedia',
        },
        {
          label: 'Content Left of Media',
          value: 'contentLeftOfMedia',
        },
      ],
    },
    {
      name: 'heroContent',
      label: 'Hero Content',
      type: 'richText',
      required: true,
    },
    {
      name: 'heroMedia',
      label: 'Hero Media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, siblingData) =>
          siblingData?.heroType === 'contentAboveMedia' ||
          siblingData?.heroType === 'contentLeftOfMedia',
      },
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
        StickyContent,
      ],
    },
    meta,
    slug,
  ],
};

export default Page;
