import type { IScoreboard } from "@/features/scoreboard/types"

import Container from "./Container"
import Scoreboard from "@/features/scoreboard/components/Scoreboard"

function Header({ scoreboard }: { scoreboard: IScoreboard }) {
  return (
    <header>
      <Container>
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <div className="text-center md:text-start">
            <h1>Memory Card Game</h1>
            <p>Don't click the same champion twice!</p>
          </div>

          <Scoreboard {...scoreboard} />
        </div>
      </Container>
    </header>
  )
}

export default Header
