import type { Champion } from "../types"

import { Card, CardContent, CardFooter } from "@/components/ui/card"

function ChampionCard({ champion: { id, name } }: { champion: Champion }) {
  return (
    <Card className="hover:bg-card/80 min-h-100 w-54 cursor-pointer">
      <CardContent className="basis-full">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${id}_0.jpg`}
        />
      </CardContent>
      <CardFooter className="justify-center">
        <p className="font-bold">{name}</p>
      </CardFooter>
    </Card>
  )
}

export default ChampionCard
