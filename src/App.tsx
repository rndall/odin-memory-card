import { ThemeProvider } from "@/components/theme-provider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useEffect, useState } from "react"

import Header from "@/components/Header"
import Main from "@/components/Main"

const queryClient = new QueryClient()

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const handleScore = () => setCurrentScore((c) => c + 1)
  const handleResetScore = () => setCurrentScore(0)

  useEffect(() => {
    const handleNewBestScore = () => {
      if (currentScore > bestScore) {
        setBestScore(currentScore)
      }
    }

    handleNewBestScore()
  }, [currentScore, bestScore])

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
