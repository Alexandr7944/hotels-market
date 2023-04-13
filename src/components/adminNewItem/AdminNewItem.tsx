import './adminNewItem-style.sass';
import { IProduct } from "../../interfase/IProduct";
import { useState } from 'react';
import Select from 'react-select';
import { useAppDispatch } from "../../hooks/hook";
import { addProduct } from "../../store/listOfProductsSlice";
import { category, subCategory } from '../../data/categoriesList';
import { defaultProduct } from '../../data/defaultProduct';

const AdminNewItem = () => {
  const [item, setItem] = useState<IProduct>(defaultProduct);
  const dispatch = useAppDispatch();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!item) return;
    dispatch(addProduct(item));
    setItem(defaultProduct);
  }

  return (
    <form
      className="admin__new-item"
      onSubmit={submit}
    >
      <label>
        <span>Производитель: </span>
        <input
          type="text"
          value={item?.producer}
          onChange={e => setItem({...item, producer: e.target.value})}
          required
        />
      </label>
      <label>
        <span>Бренд: </span>
        <input
          type="text"
          value={item.brend}
          onChange={e => setItem({...item, brend: e.target.value})}
        />
      </label>
      <label>
        <span>Наименование: </span>
        <input
          type="text"
          value={item.title}
          onChange={e => setItem({...item, title: e.target.value})}
        />
      </label>
      <label>
        <span>Тип: </span>
        <Select
          className='admin-select'
          classNamePrefix='admin-options'
          isMulti
          options={category}
          onChange={e => setItem({...item, type: e.map(item => item.value)})}
        />
       </label>
      <label>
        <span>Подтип: </span>
        <Select
          className='admin-select'
          classNamePrefix='admin-options'
          isMulti
          options={subCategory}
          onChange={e => setItem({...item, subtype: e.map(item => item.value)})}
        />
       </label>
      <label>
        <span>Упаковка: </span>
        <input
          type="text"
          value={item.packing}
          onChange={e => setItem({...item, packing: e.target.value})}
        />
      </label>
      <label>
        <span>Имя файла изображения: </span>
        <input
          type="text"
          value={item.image}
          onChange={e => setItem({...item, image: e.target.value})}
        />
      </label>
      <label>
        <span>Артикул: </span>
        <input
          type="text"
          value={item.barcode}
          onChange={e => setItem({...item, barcode: e.target.value})}
        />
      </label>
      <label>
        <span>Цена: </span>
        <input
          type="text"
          value={item.price}
          onChange={e => {
            if (!+e.target.value) return;
            setItem({...item, price: +e.target.value})
          }}
        />
      </label>
      <label>
        <span>Описание: </span>
        <textarea
          onChange={e => setItem({...item, description: e.target.value})}
          defaultValue={item.description}
        >
        </textarea>
      </label>
      <div className="admin__row-btn">
        <button type="submit">Сохранить</button>
      </div>
      
    </form>
  )
}

export default AdminNewItem
