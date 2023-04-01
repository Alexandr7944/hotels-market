type sortListType = {
  label: string,
  value: string,
  complited: boolean,
}

const sortListArr: sortListType[] = [
  {
    label: 'Название ▼',
    value: 'nameAZ',
    complited: false,
  },
  {
    label: 'Название ▲',
    value: 'nameZA',
    complited: false,
  },
  {
    label: `Цена ▼`,
    value: 'priceIncrease',
    complited: false,
  },
  {
    label: 'Цена ▲',
    value: 'priceLowering',
    complited: false,
  },
];

export default sortListArr;
