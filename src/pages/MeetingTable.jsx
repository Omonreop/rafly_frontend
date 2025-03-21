import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MeetingTable() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/meetings")
      .then((res) => setMeetings(res.data.data))
      .catch((err) => console.error("Error fetching meetings:", err));
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-bold">Ruang Meeting</h2>
        <Link to="/add-meeting" className="bg-blue-500 text-white p-2 rounded">
          + Pesan Ruangan
        </Link>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">UNIT</th>
            <th className="border p-2">RUANG MEETING</th>
            <th className="border p-2">KAPASITAS</th>
            <th className="border p-2">TANGGAL RAPAT</th>
            <th className="border p-2">WAKTU</th>
            <th className="border p-2">JUMLAH PESERTA</th>
            <th className="border p-2">JENIS KONSUMSI</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting) => (
            <tr key={meeting.id} className="text-center">
              <td className="border p-2">{meeting.unit}</td>
              <td className="border p-2">{meeting.room}</td>
              <td className="border p-2">{meeting.capacity} Orang</td>
              <td className="border p-2">
                {new Date(meeting.meetingDate).toLocaleDateString("id-ID")}
              </td>
              <td className="border p-2">
                {meeting.startTime} - {meeting.endTime}
              </td>
              <td className="border p-2">{meeting.participants} Orang</td>
              <td className="border p-2">{meeting.consumption.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
