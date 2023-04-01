import './count-product-style.sass';

type CountProductProps = {
  count: number,
  setCount: (a: number) => void
};

const CountProduct: React.FC<CountProductProps> = ({ count, setCount }) => {
  
  const decrement = () => {
    setCount(count > 1 ? count - 1 : 1);
  };

  const increment = () => {
    setCount(count = count + 1);
  };

  return (
    <div className="count-product">
      <button className="count-product__btn" onClick={decrement}>-</button>
      <span>{count}</span>
      <button className="count-product__btn" onClick={increment}>+</button>
    </div>
  )
}

export default CountProduct