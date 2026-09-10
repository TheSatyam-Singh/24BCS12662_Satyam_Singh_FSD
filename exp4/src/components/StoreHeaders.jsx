import { useContext } from "react";
import { CurrencyContext } from "../context/CurrencyContext";

const StoreHeaders = () => {
  const { currency, changeCurrency } = useContext(CurrencyContext);
  const currencies = ["USD", "EUR", "GBP", "JPY", "INR"];
  return (
    <header>
      <h1>Global Store</h1>
      {currencies.map((code) => (
        <button
          key={code}
          onClick={() => changeCurrency(code)}
          style={{
            fontWeight: currency === code ? "bold" : "normal",
            margin: "5px"
          }}
        >
          {code}
        </button>
      ))}
    </header>
  );
};

export default StoreHeaders;