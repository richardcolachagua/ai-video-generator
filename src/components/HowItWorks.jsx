import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaImage, FaRegEdit } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <section className="w-full py-20 px-4 bg-ironmanBlack flex flex-col items-center gap-16">
      {/* Text-to-Video */}
      <motion.div
        className="w-full max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Card className="bg-black bg-opacity-80 border-ironmanRed shadow-lg">
          <CardContent className="flex flex-col items-center gap-4 py-8">
            <FaRegEdit size={48} className="text-ironmanGold mb-2" />
            <h3 className="text-3xl text-ironmanGold font-bold">
              Text-to-Video
            </h3>
            <p className="text-ironmanSilver text-center">
              Type a prompt and N.O.V.A. brings your story to life with
              AI-generated video.
            </p>
            <Input
              readOnly
              className="w-full max-w-lg bg-ironmanBlack border-ironmanGold text-ironmanGold text-lg"
              value=""
              placeholder={
                <Typewriter
                  words={[
                    "A robot flying over a neon city at night...",
                    "A golden retriever surfing on the ocean...",
                    "An astronaut dancing on Mars...",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              }
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Image-to-Video */}
      <motion.div
        className="w-full max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Card className="bg-black bg-opacity-80 border-ironmanGold shadow-lg">
          <CardContent className="flex flex-col items-center gap-4 py-8">
            <FaImage size={48} />
            <h3 className="text-3xl text-ironmanRed font-bold">
              Image-to-Video
            </h3>
            <p className="text-ironmanSilver text-center">
              Upload any image and watch N.O.V.A. transform it into dynamic
              video.
            </p>
            <div className="w-full max-w-lg flex items-center gap-2">
              <Input
                readOnly
                className="flex-1 bg-ironmanBlack border-ironmanRed text-ironmanRed text-lg"
                value=""
                placeholder={
                  <Typewriter
                    words={[
                      "Upload: futuristic car.jpg",
                      "Upload: cityscape.png",
                      "Upload: portrait_photo.webp",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={1500}
                  />
                }
              />
              <FaImage className="text-ironmanGold" size={32} />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
