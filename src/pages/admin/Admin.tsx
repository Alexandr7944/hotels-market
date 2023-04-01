import './admin-style.sass'
import { useAppSelector } from "../../hooks/hook";
import AdminSidebar from '../../components/adminSidebar/AdminSidebar';
import { IProduct } from '../../interfase/IProduct';
import { useState } from 'react';
import AdminChangeItem from '../../components/adminChangeItem/AdminChangeItem';
import AdminNewItem from '../../components/adminNewItem/AdminNewItem';
import Navbar from '../../components/navbar/Navbar';

const Admin = () => {
  const products: IProduct[] = useAppSelector(state => state.listOfProducts.list);
  const [selectedItem, setSelectedItem] = useState<IProduct | undefined>();
  const navArr = [
    {title: 'Главная', to: '../hotel-market/home'},
    {title: 'Администратор'}
  ]

  return (
    <div className='admin'>
      <div className="container">
        <Navbar link={navArr} />
        <h2 className="admin__title">Администратор</h2>
        <button
          onClick={() => setSelectedItem(undefined)}
        >Новый элемент</button>
        <div className="admin__wrapper">
          <AdminSidebar products={products} selectedItem={setSelectedItem}/>
          {selectedItem
            ? <AdminChangeItem product={selectedItem}/>
            : <AdminNewItem />}
        </div>
        
      </div>
    </div>
  )
}

export default Admin