import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import InfoSection from "@/components/info-section";
import InfoCard from "@/components/info-card";
import PageHeader from "@/components/page-header";

const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const download = (file: string) => {
    if (typeof window !== "undefined") {
      window.open(file);
    }
  };
  return (
    <div className="flex flex-col bg-primary-foreground mt-[60px]">
      <PageHeader
        title="About us"
        description="Built by experienced real-estate developers, for real-estate developers. Based in Boston MA."
        imageSrc="/boston_skyline.jpg"
      />
      <div className="bg-primary-foreground flex flex-col items-center">
        <div className="flex items-start flex-row justify-center gap-4 flex-wrap max-w-[1200px]">
          <InfoSection
            title="Our Mission"
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
            title="How it works"
            description="By shipping our products directly from out manufacturing facility to your site, we source items at a fraction of the cost."
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
          <InfoCard
            title="Our Vision"
            description="We envision a world where quality room interiors are accessible to all."
            imageSrc="/Imágenes Alta Catálogo ID/Baño.jpg"
            bottomChild={
              <Button
                onClick={() => download("/catalogs/cabinets_and_vanities.pdf")}
                variant="outline"
              >
                Read More
              </Button>
            }
          />
          <InfoCard
            title="Our Values"
            description="We value quality, transparency, and sustainability in all that we do."
            imageSrc="/Imágenes Alta Catálogo ID/Magic.jpg"
            bottomChild={
              <Button
                onClick={() => download("/catalogs/doors.pdf")}
                variant="outline"
              >
                Read More
              </Button>
            }
          />
          <div className="opacity-[30%]">
            <InfoSection
              title="Our Team"
              description="Meet the team behind American Warehouse Cabinets."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
