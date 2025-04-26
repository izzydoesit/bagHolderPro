interface OrderRowProps {
    price: number;
    size: number;
    type: "bid" | "ask";
    maxSize: number;
}

export default function OrderRow({ price, size, type, maxSize }: OrderRowProps) {
    const barWidth = `${(size / maxSize) *100}%`
    const barColor = type === "bid" ? "bg-green-800" : "bg-red-800";

     return (
        <div className="relative flex justify-between p-2 rounded-md overflow-hidden text-sm font-mono">
        {/* Background Volume Bar */}
        <div
            className={`absolute top-0 left-0 h-full ${barColor} opacity-30`}
            style={{ width: barWidth }}
        />
        {/* Content on top */}
        <div className="z-10 flex justify-between w-full">
            <span>${price.toFixed(2)}</span>
            <span>{size}</span>
        </div>
        </div>
    );
  }