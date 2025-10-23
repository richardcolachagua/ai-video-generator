import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import TextToVideoForm from "./TextToVideoForm";

export default function TabSwitcher() {
  return (
    <Tabs defaultValue="text" className="w-full max-w-xl mx-auto">
      <TabsList className="mb-6 flex justify-center">
        <TabsTrigger value="text">Text to Video</TabsTrigger>
        <TabsTrigger value="image">Image to Video</TabsTrigger>
      </TabsList>
      <TabsContent value="text">
        <TextToVideoForm />
        {/* <TabsContent value="image">
        <ImageToVideoForm />
      </TabsContent> */}
      </TabsContent>
    </Tabs>
  );
}
