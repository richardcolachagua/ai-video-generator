import { useState } from "react";
import PromptInput from "./PromptInput";
import FormatSelector from "./FormatSelector";
import StyleSelector from "./StyleSelector";
import { Button } from "./ui/button";

export default function TextToVideoForm() {
  const [prompt, setPrompt] = useState("");
  const [format, setFormat] = useState("16:9");
  const [style, setStyle] = useState("cinematic");

  const handleGenerate = (e) => {
    e.preventDefault();
    // TODO: send to backend
    alert(
      `Generating video with prompt: "${prompt}", format: "${format}", style: "${style}"`
    );
  };

  return (
    <form onSubmit={handleGenerate} className="space-y-4">
      <PromptInput value={prompt} onChange={setPrompt} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FormatSelector value={format} onChange={setFormat} />
        <StyleSelector value={style} onChange={setStyle} />
      </div>
      <Button type="submit" className="w-full bg-red-700 hover:bg-red-600">
        Generate
      </Button>
    </form>
  );
}
