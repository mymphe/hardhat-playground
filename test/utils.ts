export const hexToUtf8 = (hex: string): string => {
  return decodeURIComponent(
    hex
      .slice(2)
      .replace(/\s+/g, "")
      .replace(/[0-9a-f]{2}/g, "%$&")
  );
};
