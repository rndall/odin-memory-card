import { ThemeProvider } from "./components/theme-provider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Header from "./components/Header"
import Main from "./components/Main"

const queryClient = new QueryClient()

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <Header />
        <Main />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
