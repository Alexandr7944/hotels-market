import { useAppSelector } from "../hooks/hook";
import ProductItem from "./ProductItem";
import ProductPagination from "./productPagination/ProductPagination";

type ProductsListProps = {
  totalCount: number,
  setTotalCount: (value: number) => void,
}

const ProductsList: React.FC<ProductsListProps> = ({ totalCount, setTotalCount }) => {
  const products = useAppSelector(state => state.listOfProducts.categories);
  const numberOfCardsPerPage = 12;
  const numberOfPage = Math.ceil(products.length / numberOfCardsPerPage);

  
  return (
    <div className="products">
      <div className="products__list">
        {
          products.length !== 0
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
      <p className="products__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.</p>
    </div>
  )
}

export default ProductsList;
