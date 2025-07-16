import { useChampionNamesQuery } from "@/features/champions/hooks/useChampionNamesQuery"
import uniqueIndexes from "@/utils/uniqueIndexes"
import { useState, useEffect } from "react"
import Container from "./Container"
import Scoreboard from "@/features/scoreboard/components/Scoreboard"
import ChampionCard from "@/features/champions/components/ChampionCard"

function Main() {
  const { data: championNames } = useChampionNamesQuery()
  const [randomizedChampionNames, setRandomizedChampionNames] = useState<
    string[]
  >([])
  const cardCount = 12

  useEffect(() => {
    let indexes: number[] = []
    if (championNames) {
      indexes = uniqueIndexes(championNames?.length, cardCount)
      setRandomizedChampionNames(indexes.map((i) => championNames?.[i]))
    }
  }, [championNames])

  console.log(randomizedChampionNames)

  return (
    <main>
      <Container>
        <Scoreboard />
        <div className="flex flex-wrap justify-center gap-8">
          {randomizedChampionNames.map((name) => (
            <ChampionCard name={name} key={name} />
          ))}
        </div>
      </Container>
    </main>
  )
}

export default Main
