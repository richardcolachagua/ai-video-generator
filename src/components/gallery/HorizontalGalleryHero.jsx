import { Button } from "../ui/button";

const heroItems = [
  {
    id: 1,
    label: "AI Video",
    title: "Cinematic bus ride at dusk",
    thumbnail: "/assets/hero-bus.jpg",
  },
  {
    id: 2,
    label: "AI Voiceover",
    title: "Mountain valley at sunrise",
    thumbnail: "/assets/hero-mountain.jpg",
  },
  {
    id: 3,
    label: "AI Image",
    title: "Neon city at night",
    thumbnail: "/assets/hero-city.jpg",
  },
];

export default function HorizontalGalleryHero() {
  return (
    <section className="bg-black text-white py-12">
      <div className="px-8 mb-6">
        <h2 className="text2xl font-semibold leading-tight">
          Advanced AI tools,
          <br />
          built for video creators
        </h2>
        <p className="text-sm text-neutral-400 mt-2 max-w-lg">
          Generate cinematic videos, images, and voiceovers powered by
          cutting-edge AI models.
        </p>
      </div>

      <div className="px-8 flex flex-col md:flex-row gap-4">
        {heroItems.map((item, index) => (
          <div
            key={item.id}
            className={`relative rounded-cl overflow-hidden bg-neutral-900 ${
              index === 0 ? "md:flex-[2]" : "md:flex-1"
            }`}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparant" />
            <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
              <div>
                <span className="inline-block text-[10px] px-2 py-1 rounded-full bg-black/60 bordeer norder-white/10 mb-1">
                  {item.label}
                </span>
                <p className="text-sm font-medium">{item.title}</p>
              </div>
              {index === 0 && (
                <Button className="bg-white text-black text-xs hover:bg-neutral-100">
                  Explore AI Video
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
