import { useAppDispatch } from "../../hooks/hook";
import ICategoriesList from "../../interfase/ICategoriesList";
import { filterList } from "../../store/listOfProductsSlice";
import './filterSubtype.sass'

type FilterSubtypeProps = {
  category: ICategoriesList
}

const FilterSubtype: React.FC<FilterSubtypeProps> = ({ category }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="filter-subtype">
      <h2
        className="filter-subtype__title"
        onClick={() => dispatch(filterList(["type", category.type]))}
      >{category.key}</h2>
      <ul className="filter-subtype__list">
        {
          category.subtype && category.subtype.map(subtype => (
            <li
              className="filter-subtype__item"
              key={subtype.subtype}
              onClick={() => dispatch(filterList(["subtype", subtype.subtype]))}
            >{subtype.subtypeKey}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default FilterSubtype