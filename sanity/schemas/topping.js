export default {
  name: 'topping',
  title: 'Toppings',
  type: 'document',
  icon: () => '🌶',
  fields: [
    {
      name: 'name',
      title: 'Topping name',
      type: 'string',
      description: 'Name of the topping',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'Is the topping vegetarian?',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? '🌱' : ''}`,
    }),
  },
};
