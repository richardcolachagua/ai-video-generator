import VoiceIntro from "./VoiceIntro";
import { VideoText } from "./ui/video-text";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-ironmanBlack overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        src="/assets/nova-bg.mp4"
      />
      {/* Overlay */}
      <div className="relative h-[200px] w-full flex justify-center items-center overflow-hidden px-4 md:px-8">
        <VideoText src="https://cdn.magicui.design/ocean-small.webm">
          N.O.V.A.
        </VideoText>
      </div>
      <h2 className="text-xl text-ironmanRed tracking-widest font-semibold">
        Neural Output Video Assistant
      </h2>
      <p className="text-ironmanSilver text-lg max-w-xl mx-auto">
        Creating stunning AI-powered videos from text or images in seconds
      </p>

      <VoiceIntro />
    </section>
  );
}
