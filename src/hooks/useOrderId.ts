import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/hook';

const useOrderId = () => {
  const { id } = useParams();
  const orderProducts = useAppSelector(state => state.orderProducts.list);
  return orderProducts.find(el => id && +id === el.id);
}

export default useOrderId;
