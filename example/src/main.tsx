import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "draft-js/dist/Draft.css";
import "../../src/announcementEditor.module.scss";
import "../../src/lib/draft/styles/richStyles.module.scss";

// style
import '../../src/lib/draft/component/feature/cEditor/cEditor.module.scss'
import '../../node_modules/draft-js/dist/Draft.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
