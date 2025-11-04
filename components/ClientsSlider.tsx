"use client";

import { useState } from "react";
import { clients } from "@/consts/baseConstants";

interface ClientCardProps {
  client: { name: string; logo: string; color: string };
  index: number;
}

function ClientCard({ client, index }: ClientCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      key={index}
      className="flex-shrink-0 mx-6 flex items-center justify-center min-w-[220px] h-32"
    >
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 px-8 py-6 border border-slate-200 dark:border-slate-700 w-full flex flex-col items-center justify-center gap-4 group hover:scale-110">
        {!imageError ? (
          <img
            src={client.logo}
            alt={`${client.name} logo`}
            className="h-10 w-auto object-contain transition-all duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div
            className="h-10 flex items-center justify-center"
            style={{ color: client.color }}
          >
            <p className="text-xl font-bold whitespace-nowrap">
              {client.name}
            </p>
          </div>
        )}
        <p
          className="text-base font-semibold whitespace-nowrap transition-all duration-300"
          style={{ color: client.color }}
        >
          {client.name}
        </p>
      </div>
    </div>
  );
}

export default function ClientsSlider() {
  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        <div className="flex animate-scroll">
          {[...clients, ...clients].map((client, index) => (
            <ClientCard key={index} client={client} index={index} />
          ))}
        </div>
      </div>
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-900/50 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent dark:from-background pointer-events-none" />
    </div>
  );
}
