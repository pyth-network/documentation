/**
 * Maps over object values while preserving keys, similar to Array.map but for objects.
 * Handles both regular objects and Partial objects (like Object.groupBy results).
 * Filters out undefined values automatically.
 */
export function mapValues<T, U>(
  obj: Record<string, T> | Partial<Record<string, T>>,
  fn: (value: T, key: string) => U
): Record<string, U> {
  const result: Record<string, U> = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined) {
      result[key] = fn(value, key);
    }
  }
  return result;
}
