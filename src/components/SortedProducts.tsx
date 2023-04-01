import { useAppDispatch } from '../hooks/hook';
import { sortList } from '../store/listOfProductsSlice';
import Select from 'react-select'
import sortListArr from '../data/sortedList';

const SortedProducts = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="sorted">
      Сортировка:
      <Select
        className='sorted__select'
        classNamePrefix="sorted__option"
        onChange={(e) => e && dispatch(sortList((e.value)))}
        defaultValue={sortListArr[0]}
        options={sortListArr}
      />
    </div>
  )
}

export default SortedProducts