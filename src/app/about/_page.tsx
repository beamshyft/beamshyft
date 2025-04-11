import React, { useEffect } from "react";
import Image from "next/image";
import InfoSection from "@/components/info-section";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col bg-primary-foreground z-[6]">
      <div className="bg-primary-foreground flex flex-col items-center pt-20">
        <div className="flex items-start flex-row justify-center gap-4 flex-wrap max-w-[1200px]">
          <InfoSection
            title="Our Mission"
            titleClassName="text-5xl font-bold"
            description={
              <span>
                Eliminate multiple middlemen and supply high-quality materials for the best prices available, guaranteed.
              </span>
            }
            rightChild={
              <div className="h-[400px]  w-full relative overflow-hidden  shadow-lg">
                <Image
                  src="/iStock-warm-kitchen-beamshyft-website.jpg"
                  objectFit="cover"
                  layout="fill"
                  alt="American Warehouse Cabinets"
                />
              </div>
            }
            leftChild={
              <div className="h-full w-full relative text-center sm:text-left">
                <Image
                  src="/animations/piggy-bank.gif"
                  objectFit="cover"
                  alt="home"
                  height={200}
                  width={200}

                  className="inline-block"
                />
              </div>
            }
          />
          <InfoSection
            reverse
            title="How we do it"
            description="Traditional suppliers pass your project through many hands, each adding a markup that eats away at your bottom line. We simplify the process by manufacturing our products in-house and delivering them straight to your site, ensuring you can provide the quality your clients deserve—without the extra noise."
            rightChild={
              <div className="h-[400px]  w-full relative shadow-lg overflow-hidden">
                <Image
                  src="/Imágenes Alta Catálogo ID/Nazca-Dinámica-DelanteyAtrás.jpg"
                  objectFit="cover"
                  layout="fill"
                  alt="American Warehouse Cabinets"
                />
              </div>
            }
            leftChild={
              <div className="h-full w-full relative text-center sm:text-right">
                <Image
                  src="/animations/worker.gif"
                  objectFit="cover"
                  alt="home"
                  height={200}
                  width={200}

                  className="inline-block"
                />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default About;
