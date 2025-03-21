import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MeetingForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    unit: "",
    room: "",
    capacity: 10,
    meetingDate: "",
    startTime: "",
    endTime: "",
    participants: "",
    consumption: [],
    consumptionCost: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      consumption: checked
        ? [...prev.consumption, value]
        : prev.consumption.filter((item) => item !== value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/meetings",
        formData
      );

      console.log("Response Data:", response.data); // Cek response dari backend

      navigate("/"); // Redirect setelah sukses
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Pesan Ruangan</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="unit"
            placeholder="Unit"
            value={formData.unit}
            onChange={handleChange}
            className="border p-2"
            required
          />
          <input
            type="text"
            name="room"
            placeholder="Ruang Meeting"
            value={formData.room}
            onChange={handleChange}
            className="border p-2"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.meetingDate}
            onChange={handleChange}
            className="border p-2"
            required
          />
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className="border p-2"
            required
          />
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            className="border p-2"
            required
          />
          <input
            type="number"
            name="participants"
            placeholder="Jumlah Peserta"
            value={formData.participants}
            onChange={handleChange}
            className="border p-2"
            required
          />
        </div>

        <label className="block mt-4">Jenis Konsumsi:</label>
        {["Snack Siang", "Makan Siang", "Snack Sore"].map((item) => (
          <label key={item} className="block">
            <input
              type="checkbox"
              value={item}
              onChange={handleCheckboxChange}
            />{" "}
            {item}
          </label>
        ))}

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white p-2 rounded"
        >
          Simpan
        </button>
      </form>
    </div>
  );
};

export default MeetingForm;
