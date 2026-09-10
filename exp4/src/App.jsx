import StoreHeaders from './components/StoreHeaders.jsx'
import ProductList from './components/ProductList.jsx'
import CheckoutCart from './components/CheckoutCart.jsx'
import { CurrencyProvider } from './context/CurrencyContext.jsx'

function App() {
  return (
    <CurrencyProvider>
      <div>
        <StoreHeaders />
        <ProductList />
        <CheckoutCart />
      </div>
    </CurrencyProvider>
  );
};

export default App;