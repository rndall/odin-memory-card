import { Card, CardContent, CardFooter } from "@/components/ui/card"

function ChampionCard({ name }: { name: string }) {
  return (
    <Card className="min-h-100 w-54">
      <CardContent className="basis-full">
        <img
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
