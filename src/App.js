import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
// import { store } from "./redux-store/redux-store";
import {
  store,
  themeActions,
  userActions,
} from "./redux-toolkit-store/redux-toolkit-store";

function App() {
  return (
    <>
      {/* with toolkit */}
      <Provider store={store}>
        <div className="center">
          <Dashboard />
          <User />
        </div>
      </Provider>

      {/* without toolkit */}
      {/* <Provider store={store}>
        <div className="center">
          <Dashboard />
          <User />
        </div>
      </Provider> */}
    </>
  );
}

function User() {
  const { user: name } = useSelector((state) => state.user);
  return (
    <div>
      <h1>username: {name}</h1>
    </div>
  );
}

function Dashboard() {
  const userStore = useSelector((state) => state.user);
  const themeStore = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  console.log(JSON.stringify({ userStore, themeStore }));

  useEffect(() => {
    dispatch(themeActions.dark());
    // no need to wrap data in payload as it automatically gets wrapped in payload.
    dispatch(userActions.login({ user: "ayush" }))
    // you can call thunk directly.
    dispatch((dispatch) => setTimeout(() => dispatch(userActions.logout()), 3000));
  }, [dispatch]);

  return (
    <div>
      <h1>Dashboard theme: {themeStore.theme}</h1>
    </div>
  );
}

export default App;
