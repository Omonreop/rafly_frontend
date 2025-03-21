export default function Navbar() {
  return (
    <div className="w-full bg-gray-800 p-4 text-white flex justify-between">
      <h2 className="text-lg font-bold">Ruang Meeting</h2>
      <div className="flex items-center">
        <span className="mr-4">🔔</span>
        <span className="font-semibold">John Doe</span>
      </div>
    </div>
  );
}
