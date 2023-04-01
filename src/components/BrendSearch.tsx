import React, { useState } from 'react'
import InputSearch from './input-search/InputSearch';
import { BrendType } from './ParameterMatching';

type BrendSearchProps = {
  brends: Array<BrendType | undefined>,
};


const BrendSearch: React.FC<BrendSearchProps> = ({ brends }) => {
  const [renderBrends, setRenderBrends] = useState(brends);
  const [openlist, setOpenlist] = useState(false);

  const filterBrends = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRenderBrends(
      brends.filter(el => el?.brend.toLowerCase().includes(e.target.value.toLowerCase()))
    )
  }

  return (
    <div className='brend-search'>
      <h3 className="brend-search__title">Бренд</h3>
      <div className="brend-search__row">
        <InputSearch
          name="brend-search"
          change={filterBrends}
        />
      </div>
      <ul className="brend-search__list">
        {
          renderBrends.map((brend, index) => {
            if (!brend) return false;
            if (!openlist && index > 4) {
              return (
                <li
                  key={brend.brend}
                  className="brend-search__item"
                  hidden
                >
                  <label>
                    <input
                      type="checkbox"
                      name={brend.brend}
                    />
                    <span className='brend-search__text'>
                      {brend.brend} ({brend.count})
                    </span>
                  </label>
                </li>
              )
            }
            return(
              <li
              key={brend.brend}
              className="brend-search__item"
            >
              <label>
                <input
                  type="checkbox"
                  name={brend.brend}
                />
                <span className='brend-search__text'>
                  {brend.brend} ({brend.count})
                </span>
              </label>
            </li>
            )
          })
        }
      </ul>
      {renderBrends.length === 0 && 'Бренды отсутствуют'}
      <div
        className='brend-search__open-list'
        onClick={() => setOpenlist(prev => prev = !prev)}
      >{openlist ? 'Скрыть ▲' : 'Показать все ▼'}</div>
    </div>
  )
}

export default BrendSearch