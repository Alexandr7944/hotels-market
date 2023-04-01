import ICategoriesList, { SelectType } from "../interfase/ICategoriesList";

const categoriesList: Array<ICategoriesList> = [
  {
    key: 'Уход за телом',
    type: 'body care',
    subtype: [
      {
        subtypeKey: 'Эпиляция и депиляция',
        subtype: 'Epilation and Depilation',
        subtypeToggled: false,
      },
      {
        subtypeKey: 'Средства для ванны и душа',
        subtype: 'Bath and Shower Products',
        subtypeToggled: false,
      },
      {
        subtypeKey: 'Скрабы, пилинги и пр.',
        subtype: 'Scrubs, peels',
        subtypeToggled: false,
      },
      {
        subtypeKey: 'Мочалки и губки для тела',
        subtype: 'Body Sponges and Washcloths',
        subtypeToggled: false,
      },
      {
        subtypeKey: 'Кремы, лосьоны, масла',
        subtype: 'Creams, lotions, oils',
        subtypeToggled: false,
      },
      {
        subtypeKey: 'Интимный уход',
        subtype: 'Intimate care',
        subtypeToggled: false,
      },
      {
        subtypeKey: 'Дезодоранты, антиперспиранты',
        subtype: 'deodorants, antiperspirants',
        subtypeToggled: false,
      },
      {
        subtypeKey: 'Гели для душа',
        subtype: 'shower gels',
        subtypeToggled: false,
      }
    ],
    toggled: false,
  },
  {
    key: 'Уход за руками',
    type: 'hand care',
    subtype: [
      {
        subtypeKey: 'Увлажнение и питание',
        subtype: 'hydration and nutrition',
        subtypeToggled: false,
      },
      {
        subtypeKey: 'Средства для ногтей',
        subtype: 'nail polish',
        subtypeToggled: false,
      },
      {
        subtypeKey: 'Мыло твердое',
        subtype: 'solid soap',
        subtypeToggled: false,
      },
      {
        subtypeKey: 'Мыло жидкое',
        subtype: 'liquid soap',
        subtypeToggled: false,
      },
      {
        subtypeKey: 'Крем для рук',
        subtype: 'hand cream',
        subtypeToggled: false,
      },
      {
        subtypeKey: 'Защита рук',
        subtype: 'hand protection',
        subtypeToggled: false,
      },
      {
        subtypeKey: 'Жидкость для снятия лака',
        subtype: 'nail polish remover',
        subtypeToggled: false,
      }
    ],
    toggled: false,
  },
  {
    key: 'Уход за ногами',
    type: 'foot care',
    toggled: false,
  },
  {
    key: 'Уход за лицом',
    type: 'face care',
    toggled: false,
  },
  {
    key: 'Уход за волосами',
    type: 'hair care',
    toggled: false,
  },
  {
    key: 'Средства для загара',
    type: 'tanning agent',
    toggled: false,
  },
  {
    key: 'Средства для бритья',
    type: 'shaving products',
    toggled: false,
  },
  {
    key: 'Подарочные наборы',
    type: 'gift sets',
    toggled: false,
  },
  {
    key: 'Гигиеническая продукция',
    type: 'hygienic products',
    toggled: false,
  },
  {
    key: 'Гигиена полости рта',
    type: 'oral hygiene',
    toggled: false,
  },
  {
    key: 'Бумажная продукция',
    type: 'paper products',
    toggled: false,
  }
];

export default categoriesList;


export const category: Array<SelectType> | undefined = [];

categoriesList.forEach((item) => {
  category.push({
    value: item.type,
    label: item.key
  })
});