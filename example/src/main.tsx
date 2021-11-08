import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "draft-js/dist/Draft.css";
import "../../src/announcementEditor.module.scss";
import "../../src/lib/draft/styles/richStyles.module.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
