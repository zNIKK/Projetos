import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/reducers/actions";
import { Context } from "../contexts/Context";
import ResponsiveNav from "./ResponsiveNav";
import { HeaderStyled } from "./styled";

export default function Header() {
  const { isHide, setIsHide } = useContext(Context);

  const { value } = useSelector((state) => state.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsHide(false);
  }, [value]);

  const openCart = () => {
    // e[0].target.classList.add("hide");
    dispatch(actions.showCart());
    setIsHide(true);
  };

  return (
    <HeaderStyled>
      <ResponsiveNav />
      <div>
        <button onClick={(e) => openCart(e)} type="button">
          <div className={value === 0 || isHide ? "hide" : ""}>{value}</div>
          <img src="./assets/images/icon-cart.svg" alt="icon-cart" />
        </button>
        <button type="button">
          <img
            className="avatar"
            src="/assets/images/image-avatar.png"
            alt="img-avatar"
          />
        </button>
      </div>
    </HeaderStyled>
  );
}
