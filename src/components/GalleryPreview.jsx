import { Card, CardContent } from "@shadcn/ui/card";

const videos = [
  {
    id: 1,
    title: "Robot City",
    description: "A robot flying over a neon city.",
    thumbnail: "/assets/sample1.jpg",
    videoUrl: "#",
  },
  {
    id: 2,
    title: "Surfing Dog",
    description: "A golden retriever surfing.",
    thumbnail: "/assets/sample2.jpg",
    videoUrl: "#",
  },
  {
    id: 3,
    title: "Mars Dance",
    description: "An astronaut dancing on Mars.",
    thumbnail: "/assets/sample3.jpg",
    videoUrl: "#",
  },
];

export default function GalleryPreview() {
  return (
    <section className="w-full py-16 px-4 bg-ironmanBlack flex flex-col items-center">
      <h2 className="text-4xl font-bold text-ironmanGold mb-8">
        {" "}
        N.O.V.A. Gallery
      </h2>
      <p className="text-ironmanSilver mb-8 text-center max-w-2xl">
        See what others have created with N.O.V.A.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols3 gap-8">
        {videos.map((video) => (
          <Card
            key={video.id}
            className="bg-black bg-opacity-80 border-ironmanRed shadow-lg"
          >
            <CardContent className="flex flex-col items-center p-4">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-40 object-cover rounded-lg mb-4 border-2 border-ironmanGold"
              />
              <h4 className="text-xl font-semibold text-ironmanGold">
                {video.title}
              </h4>
              <p className="text-ironmanSilver text-sm mb-2">
                {video.description}
              </p>
              <a
                href={video.videoUrl}
                className="mt-2 px-4 py-2 bg-ironmanRed text-white rounded hover:bg-ironmanGold hover:text-ironmanBlack transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
