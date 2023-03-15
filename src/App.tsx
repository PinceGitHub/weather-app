import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { GlobalProvider } from "./contexts/GlobalContext";
import { SnackbarProvider } from "./contexts/SnackbarContext";
import Home from "./pages/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
        <GlobalProvider>
          <Home />
        </GlobalProvider>
      </SnackbarProvider>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
