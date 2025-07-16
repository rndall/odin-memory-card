import { useChampionsQuery } from "@/features/champions/hooks/useChampionsQuery"
import type { Champion } from "@/features/champions/types"
import uniqueIndexes from "@/utils/uniqueIndexes"
import { useState, useEffect, useCallback } from "react"

import Container from "./Container"
import WinnerMessage from "./WinnerMessage"
import ChampionCard from "@/features/champions/components/ChampionCard"

interface MainProps {
  onScore: () => void
  onResetScore: () => void
  currentScore: number
}

function Main({ onScore, onResetScore, currentScore }: MainProps) {
  const { data: champions } = useChampionsQuery()
  const [randomizedChampions, setRandomizedChampions] = useState<Champion[]>([])
  const [clickedChampionsId, setClickedChampionsId] = useState<string[]>([])
  const cardCount = 12

  const reset = useCallback(() => {
    onResetScore()
    setClickedChampionsId([])
  }, [onResetScore])

  useEffect(() => {
    if (!champions) return

    let indices: number[] = []
    const setIndices = () => {
      indices = uniqueIndexes(champions?.length, cardCount)
      setRandomizedChampions(indices.map((i) => champions?.[i]))
    }

    if (currentScore === 0) {
      setIndices()
    }
  }, [champions, currentScore, reset])

  const randomizeCardOrder = () => {
    const indices = uniqueIndexes(cardCount, cardCount)
    setRandomizedChampions(indices.map((i) => randomizedChampions?.[i]))
  }

  const handleClick = (championId: string) => {
    randomizeCardOrder()

    if (clickedChampionsId.includes(championId)) {
      reset()
      return
    }

    setClickedChampionsId([...clickedChampionsId, championId])
    onScore()
  }

  return (
    <main>
      <Container>
        {currentScore >= cardCount ? (
          <WinnerMessage onReplay={onResetScore} />
        ) : (
          <div className="flex flex-wrap justify-center gap-8">
            {randomizedChampions.map((champion) => (
              <ChampionCard
                onClick={handleClick}
                champion={champion}
                key={champion.id}
              />
            ))}
          </div>
        )}
      </Container>
    </main>
  )
}

export default Main
