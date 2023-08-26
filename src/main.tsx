import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

import App from "./App.tsx";
import CustomRouter from "./routes/CustomRouter.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CustomRouter>
          <App />
          <ToastContainer />
        </CustomRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
