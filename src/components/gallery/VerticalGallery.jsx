import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const defaultVideos = [
  // Replace with real data later
  {
    id: 1,
    title: "Fluid Sculpt",
    creator: "Demo Artist",
    thumbnail: "/assets/sample1.jpg",
  },
  {
    id: 2,
    title: "Neon Skull",
    creator: "Demo Artist",
    thumbnail: "/assets/sample2.jpg",
  },
  {
    id: 3,
    title: "3D Character",
    creator: "Demo Artist",
    thumbnail: "/assets/sample3.jpg",
  },
];

export default function VerticalGallery({
  videos = defaultVideos,
  showTabs = false,
}) {
  return (
    <section className="bg-black py-8">
      {showTabs && (
        <div className="flex justify-between items-center px-8 mb-4 text-white">
          <div className="flex gap-6 text-sm">
            <button className="border-b-2 border-red-600 pb-1">Gallery</button>
            <button className="text-neutral-500 hover:text-white">
              Favorites
            </button>
            <button className="text-neutral-500 hover:text-white">
              Create
            </button>
          </div>
          <div className="flex gap-3 text-xs">
            <Button variant="ghost" size="sm">
              Docs
            </Button>
            <Button variant="ghost" size="sm">
              Account
            </Button>
            <Button size="sm" className="bg-red-700 hover:bg-red-600">
              Logout
            </Button>
          </div>
        </div>
      )}

      <div className="px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map((video) => (
          <Card
            key={video.id}
            className="bg-neutral-900. border-neutral-800 overflow-hidden"
          >
            <div className="relative">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-56 object-cover"
              />
            </div>
            <CardContent className="p-3 text-white text-sm">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{video.title}</p>
                  <p className="text-xs text-neutral-400">{video.creator}</p>
                </div>
                <Button
                  size="xs"
                  className="bg-neutral-800 hover:bg-neutral-700"
                >
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
