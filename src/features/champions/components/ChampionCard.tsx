import { Card, CardContent, CardFooter } from "@/components/ui/card"

function ChampionCard() {
  return (
    <Card>
      <CardContent>
        <img
          className="max-w-48"
          src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg"
          alt=""
        />
      </CardContent>
      <CardFooter className="justify-center">
        <p className="font-bold">Champion Name</p>
      </CardFooter>
    </Card>
  )
}

export default ChampionCard
