import './adminNewItem-style.sass';
import { IProduct } from "../../interfase/IProduct";
import { useState } from 'react';
import { useAppDispatch } from "../../hooks/hook";
import { addProduct } from "../../store/listOfProductsSlice";
import Select from 'react-select/dist/declarations/src/Select';
import { category } from '../../data/categoriesList';

const AdminNewItem = () => {
  const [item, setItem] = useState<IProduct>({
    id: 0,
    producer: "",
    brend: "",
    title: "",
    type: [""],
    packing: "",
    image: "",
    barcode: "",
    price: 0,
    description: ""
  });
  const dispatch = useAppDispatch();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!item) return;
    dispatch(addProduct(item));
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
          required
        />
      </label>
      <label>
        <span>Наименование: </span>
        <input
          type="text"
          value={item.title}
          onChange={e => setItem({...item, title: e.target.value})}
          required
        />
      </label>
      <label>
        <span>Тип: </span>
        <input
          type="text"
          value={item.type.join(', ')}
          onChange={e => setItem({...item, type: e.target.value.split(', ')})}
          required
        />
       </label>
      <label>
        <span>Подтип: </span>
        {/* <Select options={category}/> */}
        <input
          type="text"
          value={item.subtype?.join(', ')}
          onChange={e => setItem({...item, subtype: e.target.value.split(', ')})}
        />
       </label>
      <label>
        <span>Упаковка: </span>
        <input
          type="text"
          value={item.packing}
          onChange={e => setItem({...item, packing: e.target.value})}
          required
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
          required
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
          required
        />
      </label>
      <label>
        <span>Описание: </span>
        <textarea
          onChange={e => setItem({...item, description: e.target.value})}
          defaultValue={item.description}
          required
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
