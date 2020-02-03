export function flatten<T>(arr: T[][]) {
  return arr.reduce((prev: T[], cur: T[]) => prev.concat(cur));
}

// tslint:disable-next-line function-name
export function swap<T>(arr: T[], first: number, second: number) {
  const temp = arr[first];
  arr[first] = arr[second]; // eslint-disable-line no-param-reassign
  arr[second] = temp; // eslint-disable-line no-param-reassign
  return arr;
}

/**
 * abc =>
 *  a (bc) =>
 *    ab (c) =>
 *      abc => add
 *  a (cb) =>
 *     ac (b) =>
 *      acb => add
 */
export function permutate<T>(arr: T[], level: number = 0): T[][] {
  let out: T[][] = [];
  if (level === arr.length) {
    out.push(arr.slice(0));
    return out;
  }
  for (let idx = level; idx < arr.length; idx += 1) {
    swap(arr, level, idx);
    const perms = permutate(arr, level + 1);
    out = out.concat(perms);
    swap(arr, level, idx);
  }
  return out;
}
