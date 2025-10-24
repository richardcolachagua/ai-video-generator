import VoiceIntro from "./VoiceIntro";
import { motion } from "framer-motion";
import { VideoText } from "../../../components/ui/video-text";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100dvh-4rem)] flex flex-col justify-center items-center text-center bg-ironmanBlack overflow-hidden">
      {/* Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover opacity-40"
        src="/assets/nova-bg.mp4"
      /> */}
      {/* Centered Content */}
      <div className="relative flex flex-col items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="leading-none"
        >
          {/* Give the logo a controlled height */}
          <VideoText
            src="https://cdn.magicui.design/ocean-small.webm"
            className="
        h-[28vw] md:h-[14vw]             /* <-- controls logo block height */
        w-[80vw] md:w-[60vw] lg:w-[50vw] /* width as you like */
        leading-none
      "
            fontSize={20}
          >
            N.O.V.A.
          </VideoText>
        </motion.div>

        {/* Tighten the copy spacing */}
        <h2 className="mt-3 text-3xl text-ironmanRed tracking-widest font-semibold text-center">
          Neural Output Video Assistant
        </h2>
        <p className="mt-1 text-2xl text-ironmanSilver text-center">
          Creating stunning AI-powered videos from text or images in seconds
        </p>
      </div>

      <VoiceIntro />
    </section>
  );
}
