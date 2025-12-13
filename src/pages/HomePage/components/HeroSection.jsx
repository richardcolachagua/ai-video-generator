import VoiceIntro from "./VoiceIntro";
import { motion } from "framer-motion";
import { VideoText } from "../../../components/ui/video-text";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background visual / visual */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <VideoText />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 py-20 text-center md:flex-row md:items-center md:text-left">
        <motion.div
          className="flex-1 space-y-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-1 text-sm">
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-ironmanRed to-ironmanGold" />
            <span className="font-semibold tracking-wide text-ironmanGold">
              N.O.V.A.
            </span>
          </div>

          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Neural Output Video Assistant
          </h1>
          <p className="max-w-xl text-sm text-white/70 sm:text-base">
            Create stunning AI-powered videos from text or images in seconds.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Link to="/create?mode=text">
              <Button
                size="lg"
                className="bg-ironmanRed hover:bg-ironmanRed/98"
              >
                Start with text
              </Button>
            </Link>

            <Link to="/create?mode=image">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-white/5 text-white hover:bg-white/10"
              >
                Start with Image
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Preview + optional voice intro trigger */}
      </div>
    </section>
  );
}
