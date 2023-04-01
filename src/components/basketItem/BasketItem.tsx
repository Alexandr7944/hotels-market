import { IOrder } from '../../interfase/IOrder';
import Delete from '../Icons/Delete';
import Button from '../button/Button';
import CountProduct from '../countProduct/CountProduct';
import ProductPacking from '../productPacking/ProductPacking';
import './basketItem-style.sass';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/hook';
import { changeNumber, removeOrder } from '../../store/ordersProductSlice';

type BasketItemProps = {
  order: IOrder,
};

const BasketItem: React.FC<BasketItemProps> = ({ order }) => {
  const [count, setCount] = useState(order.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const { id } = order;
    dispatch(changeNumber({ id, count }));
  }, [count]);

  return (
    <div className='basket-item'>
      <div className="basket-item__image">
        <img src={require("../../../public/img/" + order.image)} alt={order.title} />
      </div>
      <div className="basket-item__text">
        <ProductPacking packing={order.packing} />
        <h3 className="basket-item__title">{order.brend} {order.title}</h3>
        <p>{order.description}</p>
      </div>
      <i></i>
      <CountProduct
        count={count}
        setCount={setCount}
      />
      <i></i>
      <div className="basket-item__price">{order.price} ₸</div>
      <i></i>
      <Button
        className='delete'
        click={() => dispatch(removeOrder(order.id))}
      >
        <Delete />
      </Button>
    </div>
  )
}

export default BasketItem