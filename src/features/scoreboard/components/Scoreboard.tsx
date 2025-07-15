import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function Scoreboard() {
  return (
    <Card className="max-w-40">
      <CardHeader>
        <CardTitle>Scoreboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <p>Score: 2</p>
          <p>Best Score: 12</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default Scoreboard
