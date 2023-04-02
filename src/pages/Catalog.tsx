import { useState } from "react";
import Categories from "../components/categories/Categories";
import ParameterMatching from "../components/parameterMatching/ParameterMatching";
import ProductsList from "../components/ProductsList";
import Sorted from "../components/sortedProducts/SortedProducts";
import Navbar from "../components/navbar/Navbar";
import SortedProducts from "../components/sortedProducts/SortedProducts";

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
          <SortedProducts classText="sorted-desktop"/>
        </div>
        <Categories />
        <div className="catalog-main__body">
          <ParameterMatching setTotalCount={setTotalCount}/>
          <SortedProducts classText="sorted-mobile"/>
          <ProductsList totalCount={totalCount} setTotalCount={setTotalCount}/>
        </div>
      </div>
      {
        // window.scrolTop = 200
      }
    </main>
  )
}

export default Catalog;
