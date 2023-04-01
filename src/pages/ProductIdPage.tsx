import Button from '../components/button/Button';
import { BasketIcon, Download, Share } from '../components/Icons/Icons';
import { addOrder } from '../store/ordersProductSlice';
import { useState } from 'react';
import { useAppDispatch } from '../hooks/hook';
import useProductId from '../hooks/useProductId';
import useOrderId from '../hooks/useOrderId';
import CountProduct from '../components/countProduct/CountProduct';
import ProductPacking from '../components/productPacking/ProductPacking';
import Navbar from '../components/navbar/Navbar';

const ProductIdPage: React.FC = () => {
  const product = useProductId();
  const dispatch = useAppDispatch();
  const order = useOrderId();
  const [count, setCount] = useState(order ? order.count : 1);
  const navArr = [
    {title: 'Главная', to: '../hotel-market/home'},
    {title: 'Каталог товаров', to: '../hotel-market/catalog'},
    {title: `${product?.brend} ${product?.title}`},
  ]

  return (
    <main className='product-page'>
      <Navbar link={navArr} />
      {product && <div className="container">
        <div className="product-page__flex">
          <div className="product-page__image">
            <img src={require(`../../public/img/${product.image}`)} alt={product.title} />
          </div>
          <div className="product-page__content">
            <span className="product-page__available">В наличии</span>
            <h3 className="product-page__title">
              <span>{product.brend}</span> {product.title}
            </h3>
            <ProductPacking packing={product.packing} />
            <div className="product-page__row product-page__row-order">
              <div className="product-page__price">{product.price} ₸</div>
              <CountProduct
                count={count}
                setCount={setCount}
              />
              <Button 
                text="в корзину"
                click={() => dispatch(addOrder({...product, count}))}
              >
                <BasketIcon className="basket-icon"/>
              </Button>
            </div>
            <div className="product-page__row">
              <button className="product-page__item product-page__btn-share">
                <Share />
              </button>
              <div className="product-page__item product-page__text">При покупке от <b>10 000 ₸</b> бесплатная доставка по Кокчетаву и области</div>
              <button className="product-page__item product-page__btn-price">
                Прайс-лист
                <Download className='download' />
              </button>
            </div>
            <ul className="product-page__characteristics">
              <li><span>Производитель:</span> {product.producer}</li>
              <li><span>Бренд:</span> {product.brend}</li>
              <li><span>Артикул:</span> {product.barcode}</li>
              <li>
                <span>
                {product.packing.includes('л')
                  ? "Объем"
                  : product.packing.includes('г')
                    ? "Масса"
                    : "Количество"}
                :</span> {product.packing}
              </li>
            </ul>
            <details className='product-page__details'>
              <summary>Описание</summary>
              {product.description}
            </details>
            <details className='product-page__details'>
              <summary>Характристики</summary>
              {product.description}
            </details>
          </div>
        </div>
      </div>}
    </main>
  )
}

export default ProductIdPage