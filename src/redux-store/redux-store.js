import { createStore, combineReducers } from "redux";
const initialState = {};

// create reducer for each feature
const theme = (state = initialState, action) => {
  switch (action.type) {
    case "dark":
      // do not mutate state directly instead create a copy so that redux knows something has changed
      return { ...state, theme: "dark" };
    case "light":
      return { ...state, theme: "light" };
    default:
      return state;
  }
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "logout":
      return { ...state, status: "logout", user: null };
    case "login":
      return { ...state, status: "logged in", user: action?.payload?.user };
    default:
      return state;
  }
};

// export const rootReducer = combineReducers({
//   theme,
//   user,
// });

// export const store = createStore(rootReducer);
