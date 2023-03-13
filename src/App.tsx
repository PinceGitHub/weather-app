import Home from "./pages/Home";
import { GlobalProvider } from "./contexts/GlobalContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";

function App() {
  return (
    <GlobalProvider>
      <SnackbarProvider>
        <Home />
      </SnackbarProvider>
    </GlobalProvider>
  );
}

export default App;
