import ICategoriesList from '../../interfase/ICategoriesList';
import './categories-style.sass';

type CategoryProps = {
  category: ICategoriesList,
  click: (type: string) => void
}

const Category: React.FC<CategoryProps> = ({ category, click }) => {
  return (
    <li
      className={`categories__item ${category.toggled ? "categories__item_focus" : ""}`}
      onClick={() => click(category.type)}
      key={category.type}
    >
      {category.key}
    </li>
  )
}

export default Category