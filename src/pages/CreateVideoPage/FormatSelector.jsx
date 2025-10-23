import { Select, SelectTrigger, SelectContent, SelectItem } from "./ui/select";

const formats = [
  { value: "16:9", label: "Landscape (16:9)" },
  { value: "9:16", label: "Portrait (9:16)" },
  { value: "1:1", label: "Square (1:1)" },
];

export default function FormatSelector({ value, onChange }) {
  return (
    <div>
      <label className="block text-ironmanRed font-semibold mb-2">
        Video Format
      </label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="bg-ironmanBlack border-ironmanRed text-irronmanRed w-full">
          <SelectContent>
            {formats.map((f) => (
              <SelectItem key={f.value} value={f.value}>
                {f.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectTrigger>
      </Select>
    </div>
  );
}
