import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import GalleryPreview from "./components/GalleryPreview";
import HorizontalGalleryHero from "../../components/gallery/HorizontalGalleryHero";
import Footer from "../../components/sitecomponents/Footer";

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <HorizontalGalleryHero />
      <GalleryPreview />
      <Footer />
    </>
  );
}
