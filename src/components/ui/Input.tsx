import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return <input ref={ref} className={cn("px-2 py-1 rounded bg-gray-800 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500", className)} {...props} />;
  }
);
Input.displayName = "Input";
