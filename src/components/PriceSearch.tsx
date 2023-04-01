const PriceSearch = () => {
  return (
    <div className="price-search">
      Цена <span>₸</span>
      <div className="price-search__row">
        <input
          type="number"
          name="from"
          defaultValue="0"
        /> - 
        <input
          type="number"
          name="to"
          defaultValue="10000"
        />
      </div>
    </div>
  )
}

export default PriceSearch