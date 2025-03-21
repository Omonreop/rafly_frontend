import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl font-bold mb-4">iMeeting</h2>
      <ul>
        <li className="mb-2">
          <Link to="/" className="block p-2 hover:bg-gray-700 rounded">
            Ruang Meeting
          </Link>
        </li>
      </ul>
    </div>
  );
}
