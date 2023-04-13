import { useState } from 'react';
import './categories-style.sass';
import categoriesList from "../../data/categoriesList";
import { useAppDispatch } from "../../hooks/hook";
import { filterList } from "../../store/listOfProductsSlice";
import Category from './Category';

const Categories = () => {
  const dispatch = useAppDispatch();
  const [category, setCategory] = useState(categoriesList);

  const categoryClick = (type: string) => {
    const changeCategory = category.map((item) => {
      if (item.type !== type) {
        item.toggled = false;
      } else {
        item.toggled
          ? dispatch(filterList(["type", "all"]))
          : dispatch(filterList(["type", type]));

        item.toggled = !item.toggled
      }
      
      return item;
    });

    setCategory(changeCategory);
  }

  return (
    <div className="categories">
      <ul className="categories__list">
        {category.map((category) => (
          <Category
            key={category.type}
            category={category}
            click={categoryClick}
          />
        ))}
      </ul>
    </div>
  )
}

export default Categories
