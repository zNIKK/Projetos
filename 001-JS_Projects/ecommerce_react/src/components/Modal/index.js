// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/reducers/actions";
import { Context } from "../contexts/Context";
// import ProductList from "../Product/productList";
import ProductList from "../Product/productList";
import { ModalStyle } from "./styled";

export default function Modal() {
  const dispatch = useDispatch();
  const { arr, setArr, img, setImg } = useContext(Context);
  const modal = useSelector((state) => state.show);

  const hideModal = (e) => {
    if (e.target.id === "modal") {
      dispatch(actions.showModal(false));
      // console.log(modal.show);
    }
  };

  const handleClose = () => {
    dispatch(actions.showModal(false));
  };

  const previous = () => {
    if (img > 1) {
      const changeImg = img - 1;
      arr.forEach((e) => {
        e.marked = false;
      });
      arr[changeImg - 1].marked = true;
      setImg(changeImg);
      setArr([...arr]);
    }
  };

  const next = () => {
    if (img < arr.length) {
      const changeImg = img + 1;
      arr.forEach((e) => {
        e.marked = false;
      });
      setImg(changeImg);
      arr[changeImg - 1].marked = true;
      setArr([...arr]);
    }
  };

  return (
    <ModalStyle
      onClick={(e) => hideModal(e)}
      id="modal"
      className={modal.show ? "show" : ""}
    >
      <div className="closeButton">
        <button onClick={handleClose} type="button">
          <img
            className="close-modal"
            src="./assets/images/icon-close.svg"
            alt="icon-close"
          />
        </button>
      </div>
      <div>
        <button onClick={previous} className="left" type="button">
          <img
            className="arrow-button"
            src="./assets/images/icon-previous.svg"
            alt="previous"
          />
        </button>
        <img
          src={`./assets/images/image-product-${img}.jpg`}
          alt="img-main-product"
        />
        <button onClick={next} className="right" type="button">
          <img
            className="arrow-button"
            src="./assets/images/icon-next.svg"
            alt="next"
          />
        </button>
      </div>
      <ProductList />
    </ModalStyle>
  );
}
