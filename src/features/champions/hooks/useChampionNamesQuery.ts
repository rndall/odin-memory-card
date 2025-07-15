import { useQuery } from "@tanstack/react-query"
import { fetchChampionNames } from "../api/championApi"

export const useChampionNamesQuery = () =>
  useQuery({ queryKey: ["champion-names"], queryFn: fetchChampionNames })
