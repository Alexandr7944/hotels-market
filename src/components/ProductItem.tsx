import { useAppDispatch } from '../hooks/hook';
import { addOrder } from '../store/ordersProductSlice';
import { IProduct } from "../interfase/IProduct";
import Button from "./button/Button";
import { useNavigate } from 'react-router-dom';
import { Basket } from './Icons/Icons';
import ProductPacking from './productPacking/ProductPacking';

type ProductItemProps = {
  product: IProduct
}

const ProductItem: React.FC<ProductItemProps> = ({product}) => {
  const dispatch = useAppDispatch(); 
  const router = useNavigate();

  return (
    <div className="product__item">
      <img className="product__img" src={require(`../../public/img/${product.image}`)} alt="Продукт" />
      <ProductPacking packing={product.packing}/>
      <h3
        className="product__title"
        onClick={() => router(`/hotel-market/catalog/${product.id}`)}
      >
        <span>{product.brend}</span> {product.title}
      </h3>
      <ul className="product__characteristics">
        <li><span>Штрихкод:</span> {product.barcode}</li>
        <li><span>Производитель:</span> {product.producer}</li>
        <li><span>Бренд:</span> {product.brend}</li>
      </ul>
      <div className="product__order" >
        <div className="product__price">{product.price} ₸</div>
        <Button
          text="в корзину"
          click={() => dispatch(addOrder({...product, count: 1}))}
        >
          <Basket className="basket-icon"/>
        </Button>
      </div>
    </div>
  )
}

export default ProductItem
