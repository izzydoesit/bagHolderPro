export type Trade = {
    symbol: string;
    side: "buy" | "sell";
    price: number;
    size: number;
    timestamp: number;
}
