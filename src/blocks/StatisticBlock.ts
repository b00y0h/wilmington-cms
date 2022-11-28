import { Block } from 'payload/types';
import { Type as StatType } from '../fields/stat';

export type Type = {
  stats: StatType[];
  blockType: 'statisticBlock';
};

const StatisticsBlock: Block = {
  slug: 'statisticBlock',
  labels: {
    singular: 'Statistic Block',
    plural: 'Statistic Blocks',
  },
  imageURL: 'https://i.imgur.com/jsp0DAr.png',
  fields: [
    {
      name: 'statArray',
      label: 'Statistic(s)',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'stat',
          label: 'Statistic',
          type: 'relationship',
          relationTo: 'statistic',
        },
      ],
    },
  ],
};

export default StatisticsBlock;
