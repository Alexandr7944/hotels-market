import './admin-style.sass';
import { IProduct } from '../../interfase/IProduct';
import { useAppSelector } from "../../hooks/hook";
import { useState } from 'react';
import { removeStorage } from '../../store/updataStorage';
import { Navbar, AdminSidebar, AdminNewItem, AdminChangeItem } from '../../components';

const Admin = () => {
  const products: IProduct[] = useAppSelector(state => state.listOfProducts.list);
  const [selectedItem, setSelectedItem] = useState<IProduct | undefined>();
  const removeMemory = () => {
    removeStorage('listProducts');
    window.location.reload();
  };

  const navArr = [
    {title: 'Главная', to: '../hotel-market/home'},
    {title: 'Администратор'}
  ]

  return (
    <div className='admin' data-testid="admin-page">
      <div className="container">
        <Navbar link={navArr} />
        <h2 className="admin__title">Администратор</h2>
        <button
          className='admin__btn'
          onClick={removeMemory}
        >Сброс памяти</button>
        <button
          className='admin__btn'
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