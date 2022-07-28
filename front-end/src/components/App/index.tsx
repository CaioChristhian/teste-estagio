import { ThemeProvider } from "styled-components";

import { defaultTheme } from "../../styles/themes/default";
import Header from "../Header";
import GlobalStyle from "../../styles/global";
import Home from "../../pages/Home";

import { Container } from "./styles";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Container>
          <Header />
          <Home />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
