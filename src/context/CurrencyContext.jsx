import { createContext, useState } from "react";
export const CurrencyContext = createContext();

const EXCHANGE_RATES = {
  USD: { rate: 1.0, symbol: "$" },
  EUR: { rate: 0.85, symbol: "€" },
  GBP: { rate: 0.75, symbol: "£" },
  JPY: { rate: 110.0, symbol: "¥" },
  INR: { rate: 95.46, symbol: "₹" }
};

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const changeCurrency = (currencyCode) => {
    setCurrency(currencyCode);
  };

  const formatPrice = (usdAmount) => {
    const currencyData = EXCHANGE_RATES[currency];
    if (currencyData) {
      const convertedAmount = usdAmount * currencyData.rate;
      return `${currencyData.symbol}${convertedAmount.toFixed(2)}`;
    }

    return `${usdAmount.toFixed(2)} ${currency}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        changeCurrency,
        formatPrice
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};