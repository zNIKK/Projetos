import { useSelector } from "react-redux";
import CardContent from "./CartContent";
import { CartStyled } from "./styled";

export default function Cart() {
  const { show } = useSelector((state) => state.showCart);

  if (show) {
    return (
      <CartStyled>
        <h1>Cart</h1>
        <CardContent />
      </CartStyled>
    );
  }
}
