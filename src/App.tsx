import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes";
import { ProfileProvider } from "./contexts/ProfileContext";
import { IssuesProvider } from "./contexts/IssuesContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>

      <BrowserRouter>
        <ProfileProvider>
          <IssuesProvider>
            <Router></Router>
          </IssuesProvider>
        </ProfileProvider>
      </BrowserRouter>

      <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  )
}