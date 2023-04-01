import { IProduct } from "../../interfase/IProduct";
import { useState, useEffect } from 'react';
import './adminChangeItem-style.sass'
import { useAppDispatch } from "../../hooks/hook";
import { changeProduct, removeProduct } from "../../store/listOfProductsSlice";

type AdminChangeItemProps = {
  product: IProduct;
}

const AdminChangeItem: React.FC<AdminChangeItemProps> = ({ product }) => {
  const [item, setItem] = useState(product)
  useEffect(() => setItem(product), [product])
  const dispatch = useAppDispatch();

  const submit = (e: React.FormEvent) => {
    e.preventDefault(); 
    dispatch(changeProduct(item));
  }

  return (
    <form
      className="admin__change-item"
      onSubmit={submit}
    >
      <label>
        <span>ID: </span>
        <input
          type="text"
          value={item.id}
          disabled
        />
      </label>
      <label>
        <span>Производитель: </span>
        <input
          type="text"
          value={item.producer}
          onChange={e => setItem({...item, producer: e.target.value})}
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
        <input
          type="text"
          value={item.type.join(', ')}
          onChange={e => setItem({...item, type: e.target.value.split(', ')})}
        />
       </label>
      <label>
        <span>Подтип: </span>
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
        <button
          onClick={() => dispatch(removeProduct(item.id))}
        >Удалить</button>
      </div>
      
    </form>
  )
}

export default AdminChangeItem
