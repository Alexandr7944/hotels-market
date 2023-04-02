import Bootle from "../Icons/Bootle";
import BoxOpen from "../Icons/BoxOpen";
import './product-packing.sass';

type ProductPackingProps = {
  className?: string,
  packing: string
}

const ProductPacking: React.FC<ProductPackingProps> = ({ className, packing }) => {
  return (
    <div className={className ? `product-packing ${className}` : "product-packing"}>
      {packing.includes('л') ? <Bootle /> : <BoxOpen />}
      {packing}
    </div>
  )
}

export default ProductPacking