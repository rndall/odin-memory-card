import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function Scoreboard() {
  return (
    <Card className="max-w-62">
      <CardHeader>
        <CardTitle className="text-center">Scoreboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center gap-8">
          <p>Score: 2</p>
          <p>Best Score: 12</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default Scoreboard
