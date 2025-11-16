"use client";

import Link from "next/link";
import { useState } from "react";

interface Zone {
  id: string;
  name: string;
  free: number;
  status: "green" | "yellow" | "red";
}

const ZONES: Zone[] = [
  { id: "A", name: "Zone A", free: 7, status: "green" },
  { id: "B", name: "Zone B", free: 4, status: "yellow" },
  { id: "C", name: "Zone C", free: 0, status: "red" },
];

const statusStyles = {
  green: {
    badge: "px-3 py-1 rounded-full bg-green-200 text-green-800 font-semibold",
    dot: "h-3 w-3 bg-green-500 rounded-full",
    text: "text-green-600",
  },
  yellow: {
    badge: "px-3 py-1 rounded-full bg-yellow-200 text-yellow-800 font-semibold",
    dot: "h-3 w-3 bg-yellow-500 rounded-full",
    text: "text-yellow-600",
  },
  red: {
    badge: "px-3 py-1 rounded-full bg-red-200 text-red-800 font-semibold",
    dot: "h-3 w-3 bg-red-500 rounded-full",
    text: "text-red-600",
  },
};

export default function ZonesPage() {
  const [screen, setScreen] = useState<"home" | "detail">("home");
  const [selectedZone, setSelectedZone] = useState<Zone | null>(null);

  function openDetail(zone: Zone) {
    // help link to map
  }

  return (
    <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-5 space-y-4">
      <h2 className="text-xl font-semibold">Parking Zones</h2>

      {/* ZONE LIST */}
      {ZONES.map((zone) => {
        const s = statusStyles[zone.status];

        return (
            <Link href="/map" className="block">
          <div
            key={zone.id}
            onClick={() => openDetail(zone)}
            className="p-4 bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer flex justify-between items-center"
          >
            <div className="flex flex-col">
              <span className="font-semibold">{zone.name}</span>
              <span className={`text-xs ${s.text}`}>
                {zone.free > 0 ? `${zone.free} free` : "Not available"}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <span className={s.dot} aria-hidden />
              <span className={s.badge}>
                {zone.free > 0 ? `${zone.free} Free` : "Full"}
              </span>
            </div>
          </div>
          </Link>
        );
      })}

      {/* Back Button */}
      <Link href=".." className="block">
        <button className="w-full bg-gray-300 py-2 mt-2 rounded-xl text-md hover:bg-gray-400 transition">
          Back
        </button>
      </Link>
    </div>
  );
}
