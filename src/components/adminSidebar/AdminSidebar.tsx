import './adminSidebar-style.sass';
import { IProduct } from "../../interfase/IProduct"
import AdminProductItem from "../adminProductItem/AdminProductItem"

type AdminSidebarProps = {
  products: IProduct[],
  selectedItem: (product: IProduct) => void
}

const AdminSidebar:React.FC<AdminSidebarProps> = ({ products, selectedItem }) => {
  
  return (
    <aside className="admin__sidebar">
      {
        products.map(item => 
          <AdminProductItem
            key={item.id}
            product={item}
            selectedItem={selectedItem}
          />)
      }
    </aside>
  )
}

export default AdminSidebar