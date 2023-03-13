import Home from "./pages/Home";
import { SnackbarProvider } from "./contexts/SnackbarContext";

function App() {
  return (
    <SnackbarProvider>
      <Home />
    </SnackbarProvider>
  );
}

export default App;
