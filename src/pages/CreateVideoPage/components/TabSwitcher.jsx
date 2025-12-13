import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import TextToVideoForm from "./TextToVideoForm";

const ImageToVideo = () => (
  <div className="space-y-4 text-sm text-white/70">
    <p>Upload an image to turn it into an animateed clip.</p>
    <div
      className="rounded-xl border border-dashed border-white/20 
    bg-black/60 p-6 text-center
    "
    >
      Image-to-video coming soon.
    </div>
  </div>
);

export default function TabSwitcher({ onGenerate }) {
  return (
    <Tabs defaultValue="text" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="text">Text to Video</TabsTrigger>
        <TabsTrigger value="image">Image to Video</TabsTrigger>
      </TabsList>

      <TabsContent value="text" className="mt-4">
        <TextToVideoForm onGenerate={onGenerate} />
      </TabsContent>

      <TabsContent value="image" className="mt-4">
        <ImageToVideo />
      </TabsContent>
    </Tabs>
  );
}
