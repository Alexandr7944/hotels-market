import './input-search-style.sass'
import { OutlineSearch } from '../Icons/Icons';

type InputProps = {
  name?: string,
  change?:(e: React.ChangeEvent<HTMLInputElement>) => void,
}

const InputSearch: React.FC<InputProps> = ({name, change}) => {
  return (
    <div className='input__search'>
      <input
        type="text"
        placeholder="Поиск&#8230;"
        name={name}
        onChange={change}
      />
      <button>
        <OutlineSearch />
      </button>
    </div>
  )
}

export default InputSearch