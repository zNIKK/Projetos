import * as actions from "./actions";

const initialState = {
  selected: 1,
};

// eslint-disable-next-line default-param-last
export default function reducerMainImg(
  state = initialState,
  action = actions.imgSelected
) {
  switch (action.type) {
    case "imgSelected": {
      const newState = { ...state };
      newState.selected = action.mainImg;
      return newState;
    }

    default:
      return state;
  }
}
