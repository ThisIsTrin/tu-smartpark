import Link from "next/link";
import Image from "next/image";

export default function map() {
return (
  <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-5 space-y-4">
    <h2 className="text-xl font-semibold">Live Map View</h2>
    <Image
    src="/images/map.jpg"
    alt="Parking Zone A"
    width={400} 
    height={300}
    className="rounded-lg"
    />
    <Link href=".." className="block">
      <button className="w-full bg-gray-300 py-2 rounded-xl text-md hover:bg-gray-400 transition">
        Back
      </button>
    </Link>
  </div>
);
}