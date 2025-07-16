import { useQuery } from "@tanstack/react-query"
import { fetchChampions } from "../api/championApi"

export const useChampionsQuery = () =>
  useQuery({ queryKey: ["champions"], queryFn: fetchChampions })
