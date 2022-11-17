import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ContextGitProvider } from "./context/ContextGit";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <BrowserRouter>
        <ContextGitProvider>
          <Router/>
        </ContextGitProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

