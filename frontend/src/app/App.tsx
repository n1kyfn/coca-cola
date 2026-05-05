import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import { store } from "./providers/store/store";
import { Provider } from "react-redux";
import { ToastProvider } from "shared/ui/toast/toast-provider";

export const App = () => {
  return (
    <Provider store={store}>
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </Provider>
  );
};
