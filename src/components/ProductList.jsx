import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

const ProductList = () => {
  const { formatPrice } = useContext(CurrencyContext);
  return (
    <div>
      <h2>Products</h2>
      <div>
        <h3>Wireless Headphones</h3>
        <p>Price: {formatPrice(100)}</p>
      </div>
    </div>
  );
};

export default ProductList;