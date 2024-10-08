// app/_components/BlueCard.tsx
import React from "react";

interface BlueCardProps {
  title: string;
  children: React.ReactNode;
}

export default function BlueCard({ title, children }: BlueCardProps) {
  return (
    <div className="w-full max-w-2xl bg-primary-700 rounded-lg shadow-lg overflow-hidden dark:bg-blue-200 p-6 ml-8">
      <h2 className="text-blue-900 text-xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}
