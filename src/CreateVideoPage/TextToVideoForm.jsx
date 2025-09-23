import { useState } from "react";
import PromptInput from "./PromptInput";
import FormatSelector from "./FormatSelector";
import StyleSelector from "./StyleSelector";
import { Button } from "@shadcn/ui/button";

export default function TextToVideoForm() {
  //Form State
  const [prompt, setPrompt] = useState("");
  const [format, setFormat] = useState("16:9");
  const [style, setStyle] = useState("cinematic");

  // Handler for the generate button
  const handleGenerate = (e) => {
    e.preventDefault();
    // TODO: Send prompt, format, and style to backend
    alert(
      `Generating video with prompt: "${prompt}", format: "${format}", style: "${style}"`
    );
  };

  return (
    <form
      className="flex flex-col gap-6 bg-black bbg-opacity-80 p-8 rounded-xl shadow-lg border border-ironmanRed"
      onSubmit={handleGenerate}
    >
      <PromptInput value={prompt} onChange={setPrompt} />
      <FormatSelector value={format} onChange={setFormat} />
      <StyleSelector value={style} onChange={setStyle} />

      <Button
        type="submit"
        className="bg-ironmanGold text-black font-bold hover:bg-ironmanRed hover:text-white transition"
      >
        Generate Video
      </Button>
    </form>
  );
}
