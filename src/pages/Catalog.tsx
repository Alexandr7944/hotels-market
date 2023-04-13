import { useState } from "react";
import { Categories, Navbar, ParameterMatching, ProductsList, SortedProducts } from "../components";

const Catalog = () => {
  const [totalCount, setTotalCount] = useState(0)
  const navArr = [
    {title: 'Главная', to: '../hotel-market/home'},
    {title: 'Каталог товаров'}
  ]  

  return (
    <main className="catalog-main"  data-testid="catalog-page">
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
    </main>
  )
}

export default Catalog;
