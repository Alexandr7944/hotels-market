import './productPagination-style.sass';

type ProductPaginationProps = {
  totalCount: number,
  setTotalCount: (totalCount: number) => void,
  numberOfPage: number,
  numberOfCardsPerPage: number,
  length: number
};

const ProductPagination: React.FC<ProductPaginationProps> = ({ totalCount, setTotalCount, numberOfPage, numberOfCardsPerPage, length }) => {

  const decrement = () => {
    setTotalCount(totalCount > 0
      ? totalCount - numberOfCardsPerPage
      : totalCount);
    windowScrollTop();
  };

  const showNumberPage = (index: number): void => {
    setTotalCount(numberOfCardsPerPage * index);
    windowScrollTop();
  }

  const increment = () => {
    setTotalCount(totalCount <= (length - 1 - numberOfCardsPerPage)
      ? totalCount + numberOfCardsPerPage
      : totalCount);
    windowScrollTop();
  }

  const windowScrollTop = () => window.scrollTo(0, 100);

  return (
    <div className="pagination">
      <button
        className="pagination__btn-arrow"
        onClick={decrement}
      >&lang;</button>
      {[...Array(numberOfPage)].map((_, index) => (
        <button
          key={Math.random() + ''}
          className={totalCount / numberOfCardsPerPage === index
            ? "pagination__btn pagination__btn_active"
            : "pagination__btn"}
          onClick={() => showNumberPage(index)}
        >{index + 1}</button>
      ))}
      <button
        className="pagination__btn-arrow"
        onClick={increment}
      >&rang;</button>
    </div>
  )
}

export default ProductPagination