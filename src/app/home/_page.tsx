"use client";
import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import { ChevronsDown } from "lucide-react";
import { Upload } from "lucide-react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import InfoSection from "../../components/info-section";
import AlternatingText from "../../components/alternating-text";

import Image from "next/image";

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const isPlayingRef = useRef(isPlaying);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    const handleScroll = () => {
      const cuttoff = window.innerHeight;
      if (videoRef.current) {
        if (window.scrollY > cuttoff && isPlayingRef.current) {
          setIsPlaying(false);
          videoRef.current.pause();
        } else if (window.scrollY <= cuttoff && !isPlayingRef.current) {
          setIsPlaying(true);
          videoRef.current.play();
        }
      }
    };
    window.scrollTo(0, 0);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <section
        className="w-full h-screen bg-primary-background relative flex flex-col items-center justify-center" /*style={{background: "linear-gradient(0deg, #171717, transparent 20%)"}}*/
      >
        <div className="flex flex-col items-start sm:items-center p-8 z-5 overflow-hidden w-full relative">
          <AlternatingText
            className="text-4xl font-extralight tracking-tight lg:text-5xl mb-[-16px]"
            texts={["Cabinets", "Vanities", "Doors"]}
          />
          <h1 className="scroll-m-20 text-5xl font-bold tracking-tight lg:text-7xl md:text-center">
            From our factory
            <br />
            <span className="gold-text">
              to your site.
            </span>
          </h1>
          <div className="scroll-m-20 mt-12 space-x-2">
            <Button asChild variant="outline" size={"lg"}>
              <Link to="/catalog">Browse our Catalog</Link>
            </Button>
            <Button asChild size={"lg"}>
              <Link to="/quote">Get a Quote <Upload/></Link>
            </Button>
          </div>
        </div>
        <div className="scroll-m-20 mt-200 text-secondary-background absolute bottom-8">
          <ChevronsDown
            size={50}
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }}
            className="cursor-pointer"
          />
        </div>
        <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-[-1] bg-secondary opacity-30">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            loop
            muted
            className="min-w-full min-h-full absolute object-cover"
            style={{ pointerEvents: "none" }}
          >
            <source src="/stock-vid.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
      <div className="bg-primary-foreground flex justify-center relative">
        <div className="absolute right-0 top-0 w-[500px] h-full">
          <div
            className="absolute right-0 top-0 w-full h-[1000px]"
            style={{
              background:
                "radial-gradient(circle at top right, rgba(255, 255, 255, 0.15) 0%, transparent 45%)",
            }}
          />
        </div>

        <div className="bg-transparent max-w-[1200px] pt-20 relative">
          <div className="bg-transparent absolute left-0 pl-[50px] h-full pb-20 pt-10 z-0">
            <div className="border-l-2 border-primary-background h-full"></div>
          </div>
          {/* <div className="absolute right-0 top-0 w-[500px] h-full">
            <div className="sticky z-10 right-0 top-[200px] w-full h-[1000px]">
              <Image
                className="inline-block pt-[100px]"
                src="/animations/lego.gif"
                objectFit="cover"
                height={250}
                width={250}
                alt="wood"
              />
            </div>
          </div> */}
          <InfoSection
            title="The frictionless way to furnish your rooms"
            titleClassName="text-4xl lg:text-5xl font-bold"
            description="We deliver cabinets, vanities, doors, and decking directly from our factory to your site - cutting out the middleman and passing the savings on to you."
            height="400px"
          />
          <InfoSection
            title="Why go through us?"
            titleClassName="text-3xl lg:text-4xl font-bold"
            description="We've built our business around delivering quality products at a fraction of the cost with no compromises."
            leftChild={
              <Button asChild>
                <Link to="/about">Read more <ArrowRight/></Link>
              </Button>
            }
            height="400px"
            reverse={true}
          />
          <InfoSection
            title="Design"
            description="Send us your floorplans and any special requests you have for your space."
            number={1}
            leftChild={
              <Button asChild size={"sm"} variant="secondary">
                <Link to="/quote">Get a quote <Upload/></Link>
              </Button>
            }
            rightChild={
              <div className="h-full w-full relative">
                <Image
                  src="/animations/floorplans-2.gif"
                  objectFit="cover"
                  height={250}
                  width={250}
                  alt="floorplans"
                  className="inline-block float-right"
                />
              </div>
            }
          />
          <InfoSection
            title="Manufacture"
            description="We'll manufacture your items to your exact specifications."
            number={2}
            leftChild={
              <Button asChild size={"sm"} variant="secondary">
                <Link to="/catalog">Get inspired</Link>
              </Button>
            }
            rightChild={
              <div className="h-full w-full relative">
                <Image
                  src="/animations/lego.gif"
                  objectFit="cover"
                  height={250}
                  width={250}
                  alt="wood"
                  className="inline-block float-right"
                />
              </div>
            }
          />
          <InfoSection
            title="Deliver"
            description="We'll deliver your items directly to your site in the shortest time possible."
            number={3}
            leftChild={
              <Button asChild size={"sm"} variant="secondary">
                <Link to="/contact">Get in touch</Link>
              </Button>
            }
            rightChild={
              <div className="h-full w-full relative">
                <Image
                  src="/animations/cargo.gif"
                  objectFit="cover"
                  height={250}
                  width={250}
                  alt=""
                  className="inline-block float-right"
                />
              </div>
            }
          />
          <InfoSection
            title="A variety of styles to choose from"
            leftChild={
              <Button asChild size={"sm"}>
                <Link to="/catalog">Browse our Catalog</Link>
              </Button>
            }
            rightChild={
              <div className="h-full w-full relative">
                <Image
                  src="/animations/palette.gif"
                  objectFit="cover"
                  height={250}
                  width={250}
                  alt="American Warehouse Cabinets"
                  className="inline-block float-right"
                />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
