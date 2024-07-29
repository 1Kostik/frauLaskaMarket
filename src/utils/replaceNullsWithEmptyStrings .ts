export const replaceNullsWithEmptyStrings = <T>(obj: T): T => {
  if (Array.isArray(obj)) {
    return obj.map((item) =>
      replaceNullsWithEmptyStrings(item)
    ) as unknown as T;
  } else if (obj && typeof obj === "object") {
    return Object.keys(obj).reduce((acc, key) => {
      const value = (obj as { [key: string]: string })[key];
      (acc as { [key: string]: string })[key] =
        value === null ? "" : replaceNullsWithEmptyStrings(value);
      return acc;
    }, {} as T);
  }
  return obj;
};
