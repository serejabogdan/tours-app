// import {} from './types';

const initialState = [
  {
    id: 1,
    name: 'Fortuna Ssh',
    country: 'Єгипет',
    resort: 'Шарм-эль-Шейх',
    startDate: '',
    endDate: '',
    description:
      'При покупке туров в отель системы Fortuna туристы размещаются в одном из отелей указанной категории (2*, 3*, 4*, 5*). Воспользуйтесь прекрасной возможностью испытать судьбу, приготовить себе сюрприз и при этом сэкономить деньги!',
    price: '16999',
    rate: '5*',
    filters: [
      '5*',
      'Сніданок, обід і вечеря',
      'Безкоштовний Wi-Fi',
      'Розміщення з тваринами',
      'Дитячий басейн',
      'Дитяче меню',
      'Водяні гірки',
      '1-ша лінія',
      'Шарм-ель-Шейх'
    ]
  },
  {
    id: 2,
    name: 'Fortuna hhh',
    country: 'Єгипет',
    resort: 'Шарм-эль-Шейх',
    startDate: '',
    endDate: '',
    description:
      'При покупке туров в отель системы Fortuna туристы размещаются в одном из отелей указанной категории (2*, 3*, 4*, 5*). Воспользуйтесь прекрасной возможностью испытать судьбу, приготовить себе сюрприз и при этом сэкономить деньги!',
    price: '8871',
    rate: '3*',
    filters: [
      '3*',
      'Розміщення з тваринами',
      'Дитячий басейн',
      'Водяні гірки',
      '1-ша лінія',
      'Шарм-ель-Шейх'
    ]
  },
  {
    id: 3,
    name: 'Fortuna adw',
    country: 'Єгипет',
    resort: 'Шарм-эль-Шейх',
    startDate: '',
    endDate: '',
    description:
      'При покупке туров в отель системы Fortuna туристы размещаются в одном из отелей указанной категории (2*, 3*, 4*, 5*). Воспользуйтесь прекрасной возможностью испытать судьбу, приготовить себе сюрприз и при этом сэкономить деньги!',
    price: '12399',
    rate: '4*',
    filters: [
      '4*',
      'Безкоштовний Wi-Fi',
      'Розміщення з тваринами',
      'Дитячий басейн',
      'Водяні гірки',
      '2-га лінія',
      'Шарм-ель-Шейх'
    ]
  },
  {
    id: 4,
    name: 'Fortuna ggg',
    country: 'Єгипет',
    resort: 'Шарм-эль-Шейх',
    startDate: '',
    endDate: '',
    description:
      'При покупке туров в отель системы Fortuna туристы размещаются в одном из отелей указанной категории (2*, 3*, 4*, 5*). Воспользуйтесь прекрасной возможностью испытать судьбу, приготовить себе сюрприз и при этом сэкономить деньги!',
    price: '15599',
    rate: '5*',
    filters: [
      '5*',
      'Сніданок, обід і вечеря',
      'Безкоштовний Wi-Fi',
      'Розміщення з тваринами',
      'Дитячий басейн',
      'Дитяче меню',
      'Водяні гірки',
      '1-ша лінія',
      'Шарм-ель-Шейх'
    ]
  }
];

export const toursReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
