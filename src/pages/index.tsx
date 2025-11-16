import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-5 space-y-4">
      <h2 className="text-xl font-semibold">Welcome</h2>
      <Link href="/zones" className="block">
        <button
          className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg shadow hover:bg-blue-700 transition"
        >
          View Parking Zones
        </button>
      </Link>

      <Link href="/map" className="block">
        <button
          className="w-full bg-green-600 text-white py-3 rounded-xl text-lg shadow hover:bg-green-700 transition"
        >
          Live Map View
        </button>
      </Link>
    </div>
  );
}
