import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Header from "./components/Header"
import Main from "./components/Main"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Main />
    </QueryClientProvider>
  )
}

export default App
