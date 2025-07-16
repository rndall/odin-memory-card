import type { Champion } from "../types"

export const fetchChampions = async () => {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.13.1/data/en_US/champion.json",
  )
  if (!response.ok) throw new Error(`Response status: ${response.status}`)

  const { data } = await response.json()

  const champions = Object.values<Champion>(data).map(({ id, name }) => ({
    id,
    name,
  }))
  return champions
}
