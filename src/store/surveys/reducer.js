import { types } from "./";

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_SURVEY:
      return [action.payload, ...state];
    case types.GETSURVEY:
      return action.payload;
    default: return state;
  }
}
