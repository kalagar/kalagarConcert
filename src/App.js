import {
  jssPreset,
  StylesProvider,
  ThemeProvider,
} from "@material-ui/core/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import React from "react";
import Header from "./assets/components/header_footer/Header";
import CustomTheme from "./assets/CustomTheme";
import "./assets/fonts/css/fontiran.css";
import "./assets/styles.css";
import Featured from "./components/featured";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <StylesProvider jss={jss}>
        <div style={{ height: "1500px", background: "lightblue" }}>
          <Header />
          <Featured />
        </div>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
