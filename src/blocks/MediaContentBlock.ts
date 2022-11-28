import { Block } from 'payload/types';
import link, { Type as LinkType } from '../fields/link';
import { Type as MediaType } from '../collections/Media';
import backgroundColor, {
  Type as BackgroundColorType,
} from '../fields/backgroundColor';

export type Media = {
  media: MediaType;
};

export type Type = {
  backgroundColor: BackgroundColorType;
  enableCTA: boolean;
  content: unknown;
  link: LinkType;
  media: Media[];
  blockType: 'media-content-block';
};

const MediaContentBlock: Block = {
  slug: 'media-content-block',
  labels: {
    singular: 'Media Content Block',
    plural: 'Media Content Blocks',
  },
  imageURL: 'https://i.imgur.com/ELT5Hkt.png',
  fields: [
    backgroundColor,
    {
      type: 'radio',
      name: 'contentPosition',
      label: 'Content Position',
      required: true,
      defaultValue: 'contentLeftOfMedia',
      options: [
        {
          label: 'Content Right of Media',
          value: 'contentRightOfMedia',
        },
        {
          label: 'Content Left of Media',
          value: 'contentLeftOfMedia',
        },
      ],
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
      required: true,
      admin: {
        elements: ['h2', 'h3', 'h4', 'ul', 'ol', 'link'],
      },
    },
    {
      name: 'enableCTA',
      label: 'Enable Call to Action',
      type: 'checkbox',
    },
    {
      ...link,
      admin: {
        condition: (_, siblingData) => Boolean(siblingData.enableCTA),
      },
    },
    {
      name: 'media',
      label: 'Media',
      type: 'upload',
      relationTo: 'media',
    },
  ],
};

export default MediaContentBlock;
