import Bootle from "../Icons/Bootle";
import BoxOpen from "../Icons/BoxOpen";
import './product-packing.sass';

type ProductPackingProps = {
  packing: string
}

const ProductPacking: React.FC<ProductPackingProps> = ({ packing }) => {
  return (
    <div className="product-packing">
      {packing.includes('л') ? <Bootle /> : <BoxOpen />}
      {packing}
    </div>
  )
}

export default ProductPacking