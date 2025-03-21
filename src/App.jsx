import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import MeetingTable from "./pages/MeetingTable";
import MeetingForm from "./pages/MeetingForm";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <Routes>
            <Route path="/" element={<MeetingTable />} />
            <Route path="/add-meeting" element={<MeetingForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
