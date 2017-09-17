import { types } from "./";

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_SURVEY:
      return [action.payload, ...state];

    case types.GET_SURVEYS:
      return action.payload;

    case types.REMOVE_SURVEY:
      return state.filter((survey) => survey._id !== action.payload);
    default: return state;
  }
}
