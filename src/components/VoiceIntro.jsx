import { useEffect } from "react";

export default function VoiceIntro() {
  useEffect(() => {
    const synth = window.speechSynthesis;
    if (!synth) return;
    const utter = new window.SpeechSynthesisUtterance(
      "Hello, I'm N.O.V.A., your Neural Output Video Assistant."
    );
    utter.rate = 1;
    utter.pitch = 1.2;
    utter.volume = 1;
    utter.lang = "en-US";
    synth.speak(utter);
    // Cleanup
    return () => synth.cancel();
  }, []);
  return null;
}
