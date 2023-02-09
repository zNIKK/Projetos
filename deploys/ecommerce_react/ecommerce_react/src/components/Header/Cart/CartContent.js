import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../store/reducers/actions";
import { Context } from "../../contexts/Context";

export default function CardContent() {
  const { setIsHide } = useContext(Context);
  const dispatch = useDispatch();
  const { empty } = useSelector((state) => state.isEmpty);
  const { value } = useSelector((state) => state.count);

  const deleteProduct = () => {
    dispatch(actions.isEmpty(true));
    setIsHide(true);
  };

  if (empty) {
    return <div className="content-empty">Your cart is empty.</div>;
  }
  return (
    <div className="content">
      <div>
        <img
          className="cardThumb"
          src="./assets/images/thumbs/image-product-1-thumbnail.jpg"
          alt="product-1-thumbnail"
        />
        <div>
          Fall Limited Edition Sneakers
          <div>
            $125.00 x {value} <span>${value * 125}.00</span>
          </div>
        </div>
        {/* <div>{nameProduct}{priceProduct}</div> */}
        <button onClick={deleteProduct} type="button">
          <img src="./assets/images/icon-delete.svg" alt="icon-close" />
        </button>
      </div>
      <button className="add-button" type="button">
        Checkout
      </button>
    </div>
  );
}
