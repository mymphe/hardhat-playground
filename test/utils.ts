export const hexToUtf8 = (hex: string): string => {
  return decodeURIComponent(
    hex
      .slice(2)
      .replace(/\s+/g, "")
      .replace(/[0-9a-f]{2}/g, "%$&")
  );
};

export const Ox = (unprefixedHex: string): string => {
  return "0x" + unprefixedHex;
};

export const hexToBytes = (hex: string): number[] => {
  hex = hex.replace(/^0x/i, "");
  const uint8Array = [];

  for (let i = 0; i < hex.length; i += 2) {
    const byte = hex.slice(i, i + 2);
    const uint8 = parseInt(byte, 16);
    uint8Array.push(uint8);
  }

  return uint8Array;
};
