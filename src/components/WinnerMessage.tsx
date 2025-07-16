import { Button } from "@/components/ui/button"

function WinnerMessage({ onReplay }: { onReplay: () => void }) {
  return (
    <div className="my-25 flex flex-col items-center gap-5">
      <p className="text-2xl font-bold">You win!</p>
      <Button onClick={onReplay} size="lg">
        Play Again
      </Button>
    </div>
  )
}

export default WinnerMessage
