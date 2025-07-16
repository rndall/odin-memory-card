import type { IScoreboard as ScoreboardProps } from "../types"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function Scoreboard({ currentScore, bestScore }: ScoreboardProps) {
  return (
    <Card className="max-w-62">
      <CardHeader>
        <CardTitle className="text-center">Scoreboard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center gap-8">
          <p>Score: {currentScore}</p>
          <p>Best Score: {bestScore}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default Scoreboard
