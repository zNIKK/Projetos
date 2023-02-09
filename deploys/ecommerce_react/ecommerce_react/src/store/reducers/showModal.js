import * as actions from "./actions";

const initialState = {
  show: false,
};

export default function showModal(
  state = initialState,
  action = actions.showModal
) {
  switch (action.type) {
    case "showModal": {
      const newState = { ...state };
      newState.show = !newState.show;
      return newState;
    }
    default:
      return state;
  }
}
