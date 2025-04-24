import { JSX, ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    className?: string;
}

export function Button({children, className}: ButtonProps): JSX.Element {
    return (
        <div className="p-8 text-white bg-black min-h-screen">
            <h1 className="text-4xl font-bold mb-4">🧠 Trading Dashboard</h1>
            <Button className="text-lg">Let’s trade some stonks 🚀</Button>
            <button className={`text-lg ${className}`}>{children}</button>
        </div>
    )
}