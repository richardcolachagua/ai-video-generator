import { Input } from "./ui/input";

export default function PromptInput({ value, onChange }) {
  return (
    <div>
      <label className="black text-ironmanGold font-semibold mb-2">
        Describe your videos
      </label>
      <Input
        className="w-full bg-ironmanBlack border-ironmanGold text-ironmanGold"
        type="text"
        placeholder="e.g. A robot flying over a neon city at night"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </div>
  );
}
