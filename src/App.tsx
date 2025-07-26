import { ThemeProvider } from "@/components/theme-provider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"

import Header from "@/components/Header"
import Main from "@/components/Main"

const queryClient = new QueryClient()

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const handleScore = () => {
    const newCurrentScore = currentScore + 1

    setCurrentScore(newCurrentScore)

    if (newCurrentScore > bestScore) {
      setBestScore(newCurrentScore)
    }
  }
  const handleResetScore = () => setCurrentScore(0)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <Header scoreboard={{ currentScore, bestScore }} />
        <Main
          onScore={handleScore}
          onResetScore={handleResetScore}
          currentScore={currentScore}
        />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
