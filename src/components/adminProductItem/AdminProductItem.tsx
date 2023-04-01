import { IProduct } from '../../interfase/IProduct'
import './adminProductItem-style.sass';

type AdminProductItemProps = {
  product: IProduct,
  selectedItem: (product: IProduct) => void
}

const AdminProductItem: React.FC<AdminProductItemProps> = ({ product, selectedItem }) => {
  return (
    <div
      className='admin__sidebar-item'
      onClick={() => selectedItem(product)}
    >
      <span className='admin__brend'>{product.brend}</span> 
      <span>{product.title}</span> - 
      <span>{product.price}</span>
    </div>
  )
}

export default AdminProductItem