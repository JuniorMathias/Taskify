import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { Dashboard } from "./pages/DashBoard";
import { GlobalStyle } from "./styles/global";
import { lightTheme, darkTheme } from "./styles/theme";

function App() {
  const [dark, setDark] = useState(false);
  
  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Dashboard
        dark={dark} 
        toggleTheme={() => setDark(change => !change)}
      />
    </ThemeProvider>
  );
}

export default App;
