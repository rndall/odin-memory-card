import { useChampionsQuery } from "@/features/champions/hooks/useChampionsQuery"
import type { Champion } from "@/features/champions/types"
import uniqueIndexes from "@/utils/uniqueIndexes"
import { useState, useEffect } from "react"

import Container from "./Container"
import ChampionCard from "@/features/champions/components/ChampionCard"

function Main() {
  const { data: champions } = useChampionsQuery()
  const [randomizedChampions, setRandomizedChampions] = useState<Champion[]>([])
  const cardCount = 12

  useEffect(() => {
    let indexes: number[] = []
    if (!champions) return

    indexes = uniqueIndexes(champions?.length, cardCount)
    setRandomizedChampions(indexes.map((i) => champions?.[i]))
  }, [champions])

  return (
    <main>
      <Container>
        <div className="flex flex-wrap justify-center gap-8">
          {randomizedChampions.map((champion) => (
            <ChampionCard champion={champion} key={champion.id} />
          ))}
        </div>
      </Container>
    </main>
  )
}

export default Main
