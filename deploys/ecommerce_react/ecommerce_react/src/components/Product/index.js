import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../store/reducers/actions";
import { Context } from "../contexts/Context";
import ProductList from "./productList";
import { ProductImg } from "./styled";

export default function Product() {
  const { arr, setArr, img, setImg } = useContext(Context);
  // const modal = useSelector((state) => state.show);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

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

  const showModalProduct = () => {
    setShow(true);
    dispatch(actions.showModal(show));
  };
  return (
    <ProductImg>
      <div>
        <button onClick={previous} className="left" type="button">
          <img
            className="arrow-button"
            src="./assets/images/icon-previous.svg"
            alt="previous"
          />
        </button>
        <button className="mainImg" type="button" onClick={showModalProduct}>
          <img
            src={`./assets/images/image-product-${img}.jpg`}
            alt="img-main-product"
          />
        </button>
        <button onClick={next} className="right" type="button">
          <img
            className="arrow-button"
            src="./assets/images/icon-next.svg"
            alt="next"
          />
        </button>
      </div>
      <ProductList />
    </ProductImg>
  );
}
