import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import BasketItem from '../../components/basketItem/BasketItem';
import './basket-style.sass';
import Button from '../../components/button/Button';
import Modal from '../../components/modal/Modal';
import { checkoutState } from '../../store/ordersProductSlice';
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';

const Basket = () => {
  const orderProducts = useAppSelector(state => state.orderProducts.list);
  const dispatch = useAppDispatch();
  const history = useNavigate();

  const totalPraice = orderProducts.reduce((sum, product) => sum + product.price * product.count, 0);
  const [modal, setModal] = useState(false);
  const navArr = [
    {title: 'Главная', to: '../hotel-market/home'},
    {title: 'Каталог товаров', to: '../hotel-market/catalog'},
    {title: 'Корзина'},
  ]

  const onClose = () => setModal(false);

  const checkout = () => {
    setModal(true);
    setTimeout(() => {
      dispatch(checkoutState());
      history('../hotel-market/catalog', { replace: true });
    }, 1000);
  }

  return (
    <div className='basket-page'>
      <div className="container">
        <Navbar link={navArr} />
        <h2 className="basket-page__title">Корзина</h2>
        {
          orderProducts.length > 0
            ? <>
                {orderProducts.map(orderProduct => <BasketItem
                  key={orderProduct.id}
                  order={orderProduct}
                />)}
                {modal && <Modal
                  title="Спасибо, заказ оформлен"
                  onClose={onClose}
                />}
                <div className="basket-page__row">
                  <Button
                    text='Оформить заказ'
                    click={checkout}
                  />
                  <span className="basket-page__price">{totalPraice.toFixed(2)}</span>
                </div>
              </>
            : <div className='basket-page__default'>Вы еще ничего не выбрали</div>
        }
      </div>
    </div>
  )
}

export default Basket