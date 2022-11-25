export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && !!value;
}

export function isArray(value: unknown): value is Array<unknown> {
  return isObject(value) && value instanceof Array;
}
