/* REACT */
import React from "react";
import ReactDOM from "react-dom/client";

/* STYLE */
import "./index.scss";

/* REDUX */
import { store } from "./store";
import { Provider } from "react-redux";

/* LAYOUTS COMPONENTS */
import AdminLayout from "./views/layouts/admin.layout";
import UserLayout from "./views/layouts/user.layout";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={ store }>
            <UserLayout />
        </Provider>
    </React.StrictMode>
);
