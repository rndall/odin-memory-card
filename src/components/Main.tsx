import { useChampionsQuery } from "@/features/champions/hooks/useChampionsQuery"
import type { Champion } from "@/features/champions/types"
import uniqueIndexes from "@/utils/uniqueIndexes"
import { useState, useEffect } from "react"

import Container from "./Container"
import ChampionCard from "@/features/champions/components/ChampionCard"

interface MainProps {
  onScore: () => void
  onResetScore: () => void
}

function Main({ onScore, onResetScore }: MainProps) {
  const { data: champions } = useChampionsQuery()
  const [randomizedChampions, setRandomizedChampions] = useState<Champion[]>([])
  const [clickedChampionsId, setClickedChampionsId] = useState<string[]>([])
  const cardCount = 12

  useEffect(() => {
    let indices: number[] = []
    if (!champions) return

    indices = uniqueIndexes(champions?.length, cardCount)
    setRandomizedChampions(indices.map((i) => champions?.[i]))
  }, [champions])

  const reset = () => {
    onResetScore()
    setClickedChampionsId([])
  }

  const handleClick = (championId: string) => {
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
        <div className="flex flex-wrap justify-center gap-8">
          {randomizedChampions.map((champion) => (
            <ChampionCard
              onClick={handleClick}
              champion={champion}
              key={champion.id}
            />
          ))}
        </div>
      </Container>
    </main>
  )
}

export default Main
