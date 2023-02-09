import { configureStore } from "@reduxjs/toolkit";
import reducerMainImg from "./reducers/reducerMainImg";
import showCart from "./reducers/showCart";
import isEmpty from "./reducers/showCartProduct";
import showModal from "./reducers/showModal";
import count from "./reducers/values";

const store = configureStore({
  reducer: {
    selected: reducerMainImg,
    show: showModal,
    showCart,
    isEmpty,
    count,
  },
});

export default store;
