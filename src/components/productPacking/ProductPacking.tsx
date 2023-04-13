import { ProductPackingProps } from "../../interfase/ProductPackingProps";
import Bootle from "../Icons/Bootle";
import BoxOpen from "../Icons/BoxOpen";
import './product-packing.sass';

const ProductPacking: React.FC<ProductPackingProps> = ({ className, packing }) => {
  return (
    <div className={`product-packing ${className ? className : ''}`}>
      {packing.includes('л') ? <Bootle /> : <BoxOpen />}
      {packing}
    </div>
  )
}

export default ProductPacking