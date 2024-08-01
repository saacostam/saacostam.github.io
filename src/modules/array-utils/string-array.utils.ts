export function removeDuplicateStrings(arr: string[]): string[] {
  return arr.filter(
    (st, index, arr) =>
      arr.findIndex((candidateSt) => candidateSt === st) === index,
  );
}
