import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import { store } from "./providers/store/store";
import { Provider } from "react-redux";

export const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};
