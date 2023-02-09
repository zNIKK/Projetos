import * as actions from "./actions";

const initialState = {
  show: false,
};

export default function showCart(
  state = initialState,
  action = actions.showCart
) {
  switch (action.type) {
    case "showCart": {
      const newState = { ...state };
      newState.show = !newState.show;
      return newState;
    }
    default:
      return state;
  }
}
