import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Main } from "./components";

import store from "./store";
import { Provider } from "react-redux";

/* Import and destructure main from src/component/index.js 
and anything else you may need here */


const container = document.getElementById("root")
const root = createRoot(container)

root.render(
        <Router>
        <Provider store={store}>
          <Main />
        </Provider>
      </Router>
)
