import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import GalleryPreview from "./components/GalleryPreview";
import Footer from "./components/Footer";

// Placeholder pages
function HelpPage() {
  return <div className="text-white p-8">Help/FAQ coming soon.</div>;
}
function TermsPage() {
  return <div className="text-white p-8">Terms & Privacy coming soon.</div>;
}
function CreatePage() {
  return <div className="text-white p-8">Create page coming soon.</div>;
}
function GalleryPage() {
  return <div className="text-white p-8">Gallery page coming soon.</div>;
}

export default function App() {
  return (
    <Router>
      <div className="bg-ironmanBlack min-h-screen flex flex-col">
        <Navbar />
        <main className="pt-24 flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <HowItWorks />
                  <GalleryPreview />
                </>
              }
            />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
