import React, { useEffect, useRef } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import InfoSection from "./components/info-section";
import AlternatingText from "./components/alternating-text";

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div className="flex flex-col">
      <section className="w-full h-screen bg-primary-background relative flex flex-col items-center justify-center">
        <div className="flex flex-col items-center p-8 z-5 overflow-hidden w-full">
          <AlternatingText
            className="text-4xl font-extralight tracking-tight lg:text-5xl"
            texts={[
              "Cabinets",
              "Vanities",
              "Doors",
            ]}
          />
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            From our factory to your site
          </h1>
          <p className="scroll-m-20 mt-4 text-center lg:text-xl">
            Reduce costs and overhead for your development projects by sourcing
            your interior from us.
          </p>
          <div className="scroll-m-20 mt-8 space-x-2">
            <Button variant="outline">Browse our Catalog</Button>
            <Button>Get a Quote</Button>
          </div>
        </div>
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1] bg-secondary opacity-50">
          <video
            // ref={videoRef}
            autoPlay
            loop
            muted
            className="min-w-full min-h-full absolute object-cover"
          >
            <source src="/stock-vid.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <div className="bg-primary-foreground flex justify-center">
        
        <div className="bg-transparent max-w-[1200px] pt-20 relative">
          <div className="bg-transparent absolute left-0 pl-[50px] h-full pb-20 pt-10 z-0">
              <div className="border-l-2 border-primary-background h-full"></div>
          </div>
          <InfoSection
            title="The frictionless way to furnish your rooms"
            titleClassName="text-4xl lg:text-5xl font-bold"
            description="Our catalog of furniture and decor items is designed to help you create beautiful spaces quickly and easily."
            leftChild={<Button>Shop Now</Button>}
          />
          <InfoSection
            title="Design"
            description="Send us your floorplans and any special requests you have for your space."
            number={1}
            leftChild={<Button size={"sm"}>Request a quote</Button>}
          />
          <InfoSection
            title="Manufacture"
            description="We'll manufacture your items to your exact specifications."
            number={2}
            leftChild={<Button size={"sm"}>Get inspired</Button>}
            />
          <InfoSection
            title="Deliver"
            description="We'll deliver your items to your site and help you install them."
            number={3}
            leftChild={<Button size={"sm"}>Get in touch</Button>}
            />
          <InfoSection
            title="A variety of styles to choose from"
            leftChild={<Button size={"sm"}>Browse our Catalog</Button>}
            />
          </div>
      </div>
    </div>
  );
};

export default Home;
