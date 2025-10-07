import { Card, CardContent } from "./ui/card";
import VoiceIntro from "./VoiceIntro";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-ironmanBlack overflow-hidden">
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
      <div className="relative z-10 flex flex-col items-center text-center">
        <Card className="bg-black bg-opacity-70 p-8 rounded-xl shadow-xl border-2 border-ironmanGold">
          <CardContent>
            <h1 className="text-4xl font-extrabold text-ironmanGold drop-shadow-lg">
              N.O.V.A.
            </h1>
            <h2 className="text-xl mt-2 text-ironmanRed tracking-widest font-semibold">
              Neural Output Video Assistant
            </h2>
            <p className="mt-6 text-ironmanSilver text-lg max-w-xl mx-auto">
              Creating stunning AI-powered videos from text or images in seconds
            </p>
          </CardContent>
        </Card>
        <VoiceIntro />
      </div>
    </section>
  );
}
