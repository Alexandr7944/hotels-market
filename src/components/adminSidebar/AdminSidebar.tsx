import './adminSidebar-style.sass';
import { useState } from 'react';
import { IProduct } from "../../interfase/IProduct"
import AdminProductItem from "../adminProductItem/AdminProductItem"

type AdminSidebarProps = {
  products: IProduct[],
  selectedItem: (product: IProduct) => void
}

const AdminSidebar:React.FC<AdminSidebarProps> = ({ products, selectedItem }) => {
  const [filtrProductList, setFiltrProductList] = useState(products);

  const filterArr = (type: string, value: string): void => {    
    const reg = new RegExp(`${value}`, 'i');
    
    !value.trim()
      ? setFiltrProductList(products)
      : setFiltrProductList(
        type === 'barcode'
          ? products.filter((el: IProduct) => reg.test(el.barcode))
          : products.filter((el: IProduct) => reg.test(el.title))
      )
  }
  
  return (
    <aside className="admin__sidebar">
      <form 
        className='admin__form-search'
        onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          onChange={(e) => filterArr('barcode', e.target.value)}
          placeholder="Поиск по артикулу"
        />
        <input
          type="text"
          onChange={(e) => filterArr('title', e.target.value)}
          placeholder="Поиск по наименованию"
        />
        <input
          onClick={() => filterArr('', '')}
          type="reset"
          value="Сброс поиска" />
      </form>
      <div className="admin__sidebar-list">
        {
          filtrProductList.map(item => 
            <AdminProductItem
              key={item.id}
              product={item}
              selectedItem={selectedItem}
            />)
        }
      </div>
      
    </aside>
  )
}

export default AdminSidebar