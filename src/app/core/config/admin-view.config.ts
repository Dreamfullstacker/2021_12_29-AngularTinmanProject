export const paginationConfig = {
  defaultPageSize: 25,
  paginationOptions: [10, 25, 50, 100]
};

export const operators = [
  {
    value: '*',
    label: 'Contains'
  },
  {
    value: '',
    label: 'Equal to'
  },
  {
    value: '!',
    label: 'Does not equal'
  },
  {
    value: '<',
    label: 'Is less than'
  },
  {
    value: '>',
    label: 'Is greater than'
  },
];
