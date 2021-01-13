import PriceInput from '../components/PriceInput';

export default {
  name: 'storeSettings',
  title: 'Settings',
  type: 'document',
  icon: () => '🍕',
  fields: [
    {
      name: 'name',
      title: 'Store name',
      type: 'string',
      description: 'Name of the store',
    },
    {
      name: 'slicemasters',
      title: 'Currently editing',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    },
    {
      name: 'hotSlices',
      title: 'Got slices available',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pizza' }] }],
    },
  ],
};
