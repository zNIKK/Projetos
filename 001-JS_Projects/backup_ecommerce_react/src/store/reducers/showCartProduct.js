const initialState = {
  empty: true,
};

// eslint-disable-next-line default-param-last
export default function isEmpty(state = initialState, action) {
  switch (action.type) {
    case "empty": {
      const newState = { ...state };
      console.log(action.isempty);
      newState.empty = action.isempty;
      return newState;
    }
    default:
      return state;
  }
}
