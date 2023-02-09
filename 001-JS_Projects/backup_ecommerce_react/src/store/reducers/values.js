import * as actions from "./actions";

const initialState = {
  value: 0,
};

export default function count(state = initialState, action = actions.values) {
  switch (action.type) {
    case "values": {
      const newState = { ...state };
      newState.value = action.valueCount;
      return newState;
    }
    default:
      return state;
  }
}
