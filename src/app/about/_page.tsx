import React, { useEffect } from "react";
import Image from "next/image";
import InfoSection from "@/components/info-section";
import PageHeader from "@/components/page-header";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col bg-primary-foreground mt-[70px]">
      <PageHeader
        title="About us"
        description="Built by experienced real-estate developers, for real-estate developers. Based in Boston MA."
        imageSrc="/boston_skyline.jpg"
      />
      <div className="bg-primary-foreground flex flex-col items-center pt-20">
        <div className="flex items-start flex-row justify-center gap-4 flex-wrap max-w-[1200px]">
          <InfoSection
            title="Our Mission"
            titleClassName="text-5xl font-bold"
            description={
              <span>
                We aim to deliver quality interiors at a fraction of the cost.
              </span>
            }
            rightChild={
              <div className="h-[400px]  w-full relative rounded-2xl overflow-hidden">
                <Image
                  src="/Imágenes Alta Catálogo ID/Vestidor-2.jpg"
                  objectFit="cover"
                  layout="fill"
                  alt="American Warehouse Cabinets"
                />
              </div>
            }
          />

          <InfoSection
            title="Our Vision"
            reverse
            description="We envision a world where real-estate developers can focus on their projects, and not the logistics of sourcing materials."
            rightChild={
              <div className="h-[400px]  w-full relative rounded-2xl overflow-hidden">
                <Image
                  src="/Imágenes Alta Catálogo ID/Baño.jpg"
                  objectFit="cover"
                  layout="fill"
                  alt="American Warehouse Cabinets"
                />
              </div>
            }
          />
          <InfoSection
            title="Our Values"
            description="We value quality, transparency, accessibility in all that we do. We believe developers should have access to the best materials at the best prices, no matter their experience."
            rightChild={
              <div className="h-[400px]  w-full relative rounded-2xl overflow-hidden">
                <Image
                  src="/Imágenes Alta Catálogo ID/Baño.jpg"
                  objectFit="cover"
                  layout="fill"
                  alt="American Warehouse Cabinets"
                />
              </div>
            }
          />
            <InfoSection
              title="Our Team"
              description="Meet the team behind Beamshyft."
            />
        </div>
      </div>
    </div>
  );
};

export default About;
