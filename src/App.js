import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Main from "./components/Main";


let theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
