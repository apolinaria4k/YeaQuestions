export const setVariants = (skills, specializations) => {
  return [
    {
      id: 1,
      title: 'Специализация',
      data: specializations,
      hasButton: true,
    },
    {
      id: 2,
      title: 'Навыки',
      data: skills,
      hasButton: true,
    },
    {
      id: 3,
      title: 'Уровень сложности',
      data: [
        { id: 31, title: '1-3' },
        { id: 32, title: '4-6' },
        { id: 33, title: '7-8' },
        { id: 34, title: '9-10' },
      ],
      hasButton: false,
    },
    {
      id: 4,
      title: 'Рейтинг',
      data: [
        { id: 41, title: 1 },
        { id: 42, title: 2 },
        { id: 43, title: 3 },
        { id: 44, title: 4 },
        { id: 45, title: 5 },
      ],
      hasButton: false,
    },
    {
      id: 5,
      title: 'Статус',
      data: [
        { id: 51, title: 'Изученные' },
        { id: 52, title: 'Неизученные' },
        { id: 53, title: 'Все' },
      ],
      hasButton: false,
    },
  ];
};
