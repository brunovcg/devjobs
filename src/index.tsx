import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Providers from "./providers";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
