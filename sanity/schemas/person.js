export default {
  name: 'person',
  title: 'Slicemasters',
  type: 'document',
  icon: () => '🧑',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Tell us a bit about u',
    },
    {
      name: 'image',
      title: 'Pizza photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
