import './sortedProducts.sass';
import { useAppDispatch } from '../../hooks/hook';
import { sortList } from '../../store/listOfProductsSlice';
import Select from 'react-select'
import sortListArr from '../../data/sortedList';

type SortedProductsProps = {
  classText?: string
}

const SortedProducts: React.FC<SortedProductsProps> = ({ classText }) => {
  const dispatch = useAppDispatch();

  return (
    <div className={classText ? `sorted ${classText}` : 'sorted'}>
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