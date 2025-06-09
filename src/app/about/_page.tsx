import React, { useEffect } from "react";
import Image from "next/image";
import InfoSection from "@/components/info-section";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Beamshyft | Our Mission";
    return () => {
      document.title = "Beamshyft";
    }
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
                Eliminate middlemen and supply quality products for the best prices available, guaranteed.
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
          />
          <InfoSection
            reverse
            title="How we do it"
            description="Based in Boston, our startup leverages state-of-the-art factories across multiple continents to deliver quality products at the best prices. Traditional suppliers pass your project through many hands, each adding a markup that eats away at your bottom line. We cut them out and deliver the products straight from the manufacturer to your site."
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
          />
        </div>
      </div>
    </div>
  );
};

export default About;
