export function cn(...inputs: (string | boolean | undefined)[]) {
  return inputs
    .filter(Boolean)
    .join(" ")
    .trim();
}

export function formatNumber(num: number, decimals: number = 2): string {
    return num.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    });
}
