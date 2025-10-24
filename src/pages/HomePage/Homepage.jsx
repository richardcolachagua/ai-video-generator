import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import GalleryPreview from "./components/GalleryPreview";
import Footer from "../../components/sitecomponents/Footer";

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <GalleryPreview />
      <Footer />
    </>
  );
}
