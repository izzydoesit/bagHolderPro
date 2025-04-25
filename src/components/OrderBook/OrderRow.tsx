interface OrderRowProps {
    price: number;
    size: number;
    maxSize: number;
    type: "bid" | "ask";
}

export default function OrderRow({ price, size, type, maxSize }: OrderRowProps) {
    const barWidth = `${(size / maxSize) *100}%`
    const barColor = type === "bid" ? "bg-green-700" : "bg-red-700";

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