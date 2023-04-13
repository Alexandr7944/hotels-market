import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/hook";
import { BasketIcon } from "./Icons";
import ProductItem from "./ProductItem";
import ProductPagination from "./productPagination/ProductPagination";
import { useEffect, useRef, useState } from 'react';

type ProductsListProps = {
  totalCount: number,
  setTotalCount: (value: number) => void,
}

const ProductsList: React.FC<ProductsListProps> = ({ totalCount, setTotalCount }) => {
  const products = useAppSelector(state => state.listOfProducts.categories);
  const numberOfCardsPerPage = 12;
  const numberOfPage = Math.ceil(products.length / numberOfCardsPerPage);
  const order = useAppSelector(state => state.orderProducts.list);
  const count = order.reduce((sum, item) => sum + item.count, 0);
  const history = useNavigate();
  const [scroll, setScroll] = useState(0);
  const lastElement = useRef<HTMLParagraphElement>(null);

  const scrollHandler = (e: Event): void => {
    setScroll(window.scrollY);
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function() {
      document.removeEventListener('scroll', scrollHandler);
    }
  }, []);

  const setOrder = () => {
    history('../hotel-market/basket', { replace: true });
    window.scrollTo(0, 0);
  }

  return (
    <div className="products">
      <div className="products__list">
        {
          products.length
            ? products.map((product, index) => (
              index >= totalCount 
                && index < totalCount + numberOfCardsPerPage 
                && <ProductItem key={product.id} product={product}/>
            ))
            : <div className="products__default">Товар отсутствует</div>
        }
      </div>
      {
        numberOfPage > 1 &&
        <ProductPagination
          totalCount={totalCount}
          setTotalCount={setTotalCount}
          numberOfPage={numberOfPage}
          numberOfCardsPerPage={numberOfCardsPerPage}
          length={products.length}
        />
      }
      <p
        ref={lastElement}
        className="products__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.</p>
      {
        scroll > 180 && count 
          && <div
            className="basket basket__fixed"
            onClick={setOrder}
          >
            <div className="basket__img">
              <BasketIcon />
              {count > 0 && <span className="basket__count">{count}</span>}
            </div>
          </div>
      }
    </div>
  )
}

export default ProductsList;
