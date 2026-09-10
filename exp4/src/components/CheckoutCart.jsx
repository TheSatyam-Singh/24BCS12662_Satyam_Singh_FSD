import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";


const CheckoutCart = () => {
  const { formatPrice } = useContext(CurrencyContext);

  return (
    <div>
      <h2>Checkout Cart</h2>
      <p>Subtotal (including tax): {formatPrice(150)}</p>
    </div>
  );
};

export default CheckoutCart;