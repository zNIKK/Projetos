import { Provider } from "react-redux";
import ProductContext from "./components/contexts/Context";
import Header from "./components/Header";
import Cart from "./components/Header/Cart/Cart";
import Modal from "./components/Modal";
import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import store from "./store";
import GlobalStyle from "./style/GlobalStyles";

function App() {
  return (
    <Provider store={store}>
      <ProductContext>
        <Header />
        <GlobalStyle />
        <main>
          <Modal />
          <Cart />
          <Product />
          <ProductDetails />
        </main>
      </ProductContext>
    </Provider>
  );
}

export default App;
