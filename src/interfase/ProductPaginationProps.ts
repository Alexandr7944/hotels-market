export type ProductPaginationProps = {
  totalCount: number,
  setTotalCount: (totalCount: number) => void,
  numberOfPage: number,
  numberOfCardsPerPage: number,
  length: number
};