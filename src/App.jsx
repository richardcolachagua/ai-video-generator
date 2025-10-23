import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <Router>
      <div className="bg-ironmanBlack min-h-screen flex flex-col">
        <main className="pt-24 flex-1">
          <Routes>
            <Route path="/homepage" element={<Homepage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
