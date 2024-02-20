import SideBarMenu from "./components/navigation/SideBarMenu";
import "./App.css";

import ThemeProvider from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <SideBarMenu />
    <ThemeProvider />
  );
}

export default App;
