export function valueToArr<T>(value: T | T[], count: number = 2): T[] {
  if (Array.isArray(value)) {
    return value
  } else {
    return new Array(count).fill(value)
  }
}