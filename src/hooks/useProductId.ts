import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/hook';

const useProductId = () => {
  const { id } = useParams();
  const products = useAppSelector(state => state.listOfProducts.categories);
  return products.find(el => id && +id === el.id);
}

export default useProductId;
