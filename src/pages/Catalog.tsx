import { useState } from "react";
import Categories from "../components/Categories";
import ParameterMatching from "../components/ParameterMatching";
import ProductsList from "../components/ProductsList";
import Sorted from "../components/SortedProducts";
import Navbar from "../components/navbar/Navbar";

const Catalog = () => {
  const [totalCount, setTotalCount] = useState(0)
  const navArr = [
    {title: 'Главная', to: '../hotel-market/home'},
    {title: 'Каталог товаров'}
  ]

  return (
    <main className="catalog-main">
      <div className="container">
        <Navbar link={navArr} />
        <div className="catalog-main__title">
          <h2>Косметика и гигиена</h2>
          <Sorted />
        </div>
        <Categories />
        <div className="catalog-main__body">
          <ParameterMatching setTotalCount={setTotalCount}/>
          <ProductsList totalCount={totalCount} setTotalCount={setTotalCount}/>
        </div>        
      </div>
    </main>
  )
}

export default Catalog;
