interface OrderRowProps {
    price: number;
    size: number;
    type: "bid" | "ask";
}

export default function OrderRow({ price, size, type }: OrderRowProps) {
    return (
      <div
        className={`flex justify-between p-2 rounded-md ${
          type === "bid" ? "bg-green-800" : "bg-red-800"
        }`}
      >
        <span>${price.toFixed(2)}</span>
        <span>{size}</span>
      </div>
    );
  }