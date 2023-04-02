import './categories-style.sass';
import categoriesList from "../../data/categoriesList";
import { useAppDispatch } from "../../hooks/hook";
import { filterList } from "../../store/listOfProductsSlice";

const Categories = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="categories">
      <ul className="categories__list">
        {categoriesList.map((category) => (
          <li
            className={category.toggled 
              ? "categories__item categories__item_focus"
              : "categories__item"
            }
            onClick={() => dispatch(filterList(["type", category.type]))}
            key={category.type}
          >
            {category.key}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
