import * as React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";
import Pay from "./Pay";
import Withdraw from "./Withdraw";
ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      {/* <Pay /> */}
      <Withdraw />
    </StyledEngineProvider>
  </React.StrictMode>
);
