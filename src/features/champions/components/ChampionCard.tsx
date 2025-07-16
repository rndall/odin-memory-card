import { Card, CardContent, CardFooter } from "@/components/ui/card"

function ChampionCard({ name }: { name: string }) {
  return (
    <Card>
      <CardContent>
        <img
          className="max-w-42"
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_0.jpg`}
          alt=""
        />
      </CardContent>
      <CardFooter className="justify-center">
        <p className="font-bold">{name}</p>
      </CardFooter>
    </Card>
  )
}

export default ChampionCard
