import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AppStore from "./context/AppStore";

const root = createRoot(document.getElementById('root'))
root.render(
    <AppStore >
        <App />
    </AppStore>
) 