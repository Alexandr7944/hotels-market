import { IProduct } from "../../interfase/IProduct";
import { useState, useEffect } from 'react';
import './adminChangeItem-style.sass'
import { useAppDispatch } from "../../hooks/hook";
import { changeProduct, removeProduct } from "../../store/listOfProductsSlice";
import { defaultProduct } from "../../data/defaultProduct";
import Select, { MultiValue } from "react-select";
import { category, subCategory } from "../../data/categoriesList";
import { SelectType } from "../../interfase/ICategoriesList";

type AdminChangeItemProps = {
  product: IProduct;
}

const AdminChangeItem: React.FC<AdminChangeItemProps> = ({ product }) => {
  const [item, setItem] = useState(product)
  useEffect(() => setItem(product), [product])
  const dispatch = useAppDispatch();

  const getValueType = () => {    
    if (item.type.length === 0) return [];
    return category?.filter(el => item.type.includes(el.value))   
  }

  const changeOptionsType = (e: MultiValue<SelectType>) => {
    setItem({...item, type: e.map(item => item.value)})
  }

  const getValueSubtype = () => {    
    if (item.subtype?.length === 0) return [];
    return subCategory?.filter(el => item.subtype?.includes(el.value))   
  }  

  const changeOptionsSubtype = (e: MultiValue<SelectType>) => {
    setItem({...item, subtype: e.map(item => item.value)})
    console.log(item);
    
  }
  
  const submit = (e: React.FormEvent) => {
    e.preventDefault(); 
    dispatch(changeProduct(item));
    setItem(defaultProduct);
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
        <span>Тип ухода: </span>
        <Select
          className='admin-select'
          classNamePrefix='admin-options'
          isMulti
          id="selectType"
          value={getValueType()}
          options={category}
          onChange={changeOptionsType}
        />
      </label>
      <label>
        <span>Подтип: </span>
        <Select
          className='admin-select'
          classNamePrefix='admin-options'
          isMulti
          id="selectSubtype"
          value={getValueSubtype()}
          options={subCategory}
          onChange={changeOptionsSubtype}
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
          value={item.description}
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
