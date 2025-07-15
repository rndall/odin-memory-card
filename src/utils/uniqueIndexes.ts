export default function uniqueIndexes(max: number, qty: number) {
  const retVal = new Set<number>()
  while (retVal.size < qty) {
    retVal.add(Math.floor(Math.random() * max))
  }
  return Array.from(retVal)
}
