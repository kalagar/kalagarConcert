import React from "react";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import CustomTheme from "./assets/CustomTheme";
import './assets/fonts/css/fontiran.css'
import './assets/styles.css'
import { Typography } from "@material-ui/core";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
      <StylesProvider jss={jss}>
        <Typography variant="body1">منصور کلاگر</Typography>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
