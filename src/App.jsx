import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage";

export default function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </main>
    </Router>
  );
}
