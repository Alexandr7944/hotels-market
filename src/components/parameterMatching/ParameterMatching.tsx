import './parameterMatching-style.sass';
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { filterParameterList } from "../../store/listOfProductsSlice";
import BrendSearch from "../BrendSearch";
import FilterSubtype from "../filterSubtype/FilterSubtype";
import PriceSearch from "../PriceSearch";
import Button from "../button/Button";
import categoriesList from "../../data/categoriesList";
import {Arrow, Delete} from '../Icons';
import { useState } from 'react';
import { BrendType, IFormElement, ParameterMatchingProps } from '../../interfase/parameterMatchingType';

const ParameterMatching: React.FC<ParameterMatchingProps> = ({ setTotalCount }) => {
  const listProducts = useAppSelector(state => state.listOfProducts.list);
  const dispatch = useAppDispatch();
  const [mobileMenu, setMobileMenu] = useState(false);
  const brends: Array<undefined | BrendType> = [];
  
  listProducts.forEach(product => {
    const brend = brends.find(el => el?.brend === product.brend);
    brend
      ? brend.count++
      : brends.push({brend: product.brend, count: 1})
  })

  const handleEvent = (e: React.FormEvent) => {
    const form = e.currentTarget as HTMLFormElement
    const { from, to }: IFormElement = form.elements as any;
    const brends = [];

    for (let i = 0; i < form.length; i++) {
      const input = form[i] as HTMLInputElement;
      if (input.checked) brends.push(input.name);
    }    

    dispatch(filterParameterList({from: +from.value, to: +to.value, brends}));
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setTotalCount(0);
    handleEvent(e);
  }

  const reset = () => {
    dispatch(filterParameterList({from: 0, to: Infinity}));
    setTotalCount(0);
  }

  return (
    <aside className="parameter-matching">
      <form
        className="parameter-matching__form"
        onSubmit={submit}
        onReset={reset}
      >
        <div className="parameter-matching__title-flex">
          <h2 className="parameter-matching__title">Подбор по параметрам</h2>
          <button
            className={`parameter-matching__btn-menu ${mobileMenu ? 'parameter-matching__btn-menu_open' : ''}`}
            onClick={() => setMobileMenu(prev => prev = !prev)}
          >
            <Arrow />
          </button>
        </div>
        <div className={mobileMenu
          ? "parameter-matching__mobile"
          : "parameter-matching__mobile_hidden"}>
          <PriceSearch />
          <BrendSearch brends={brends} />
          <div className="parameter-matching__buttons">
            <Button text="Показать"/>
            <button
              className="parameter-matching__reset"
              type="reset"
            >
              <Delete />
            </button>
          </div>
        </div>
      </form>
      <div className="parameter-matching__mobile_hidden">
        {categoriesList.map((category) => <FilterSubtype key={category.type} category={category}/>)}
      </div>
    </aside>
  )
}

export default ParameterMatching
