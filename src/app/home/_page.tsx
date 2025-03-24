"use client";
import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import { ArrowDown, ChevronsDown } from "lucide-react";
import { Upload, PencilRuler, Factory, Truck, Paintbrush } from "lucide-react";
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
            <span className="gold-text font-extralight">
              to your site.
            </span>
          </h1>
          <div className="scroll-m-20 mt-12 flex flex-col sm:flex-row sm:items-center gap-4">
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
        <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-[-1] bg-secondary opacity-15">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            loop
            muted
            className="min-w-full min-h-full absolute object-cover"
            style={{ pointerEvents: "none" }}
          >
            <source src="/kitchen_sora.mp4" type="video/mp4" />
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
          <div className="bg-transparent absolute left-0 pl-[14px] md:pl-[50px] h-full pb-20 pt-10 z-0">
            <div className="border-l-2 border-primary-background h-full"></div>
          </div>
          <InfoSection
            title="The frictionless way to furnish your rooms"
            titleClassName="text-4xl lg:text-5xl font-bold"
            description="We deliver cabinets, vanities, doors, and decking directly from our manufacturers - cutting out the middleman and passing the savings on to you."
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
            title="How it works"

            description="By sending us your blueprints and requests, we can provide you with a catered list of products in 24 hours - no strings attached. Once you and our manufacturer agree to specifications, you place your order and we deliver your products in 4-6 weeks."
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
            leftChild={
              <Button asChild >
                <Link to="#design" onClick={() => {
                const element = document.getElementById("design");
                element?.scrollIntoView({ behavior: "smooth" });
              }
                }>Learn More <ArrowDown/></Link>
              </Button>
            }
          />
          <InfoSection

            title={<div id="design" className="flex flex-row gap-2 items-center"><PencilRuler width={30} height={30}/>Design</div>}
            description="Send us your floorplans and any special requests you have for your space. We work out designs between you and our manufacturers until you are 100% satisfied."
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
            title="Endless styles"
            description="We have a wide selection of cabinets, vanities, and doors to choose from. Our manufacturers can also create custom pieces to match your style."
            reverse
            leftChild={
              <Button asChild size={"sm"}>
                <Link to="/catalog">Browse our Catalog</Link>
              </Button>
            }
          />
          <InfoSection
            title={<div className="flex flex-row gap-2 items-center"><Factory width={30} height={30}/>Manufacture</div>}
            description="We'll manufacture your items to your exact specifications. This should take no more than 2 weeks."
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
            title={<div className="flex flex-row gap-2 items-center"><Truck width={30} height={30}/>Deliver</div>}
            description="We'll deliver your items directly to your site in the shortest time possible. You'll receive your items in a shipping container, ready to be installed."
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
            title="Make the Shyft today"
            height="200px"
            description="Get started on your next project with Beamshyft. We're here to help you every step of the way."
            rightChild={
              <div className="flex flex-row gap-4">
                <Button asChild size={"lg"} variant="secondary">
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              <Button asChild size={"lg"} variant="default">
                <Link to="/quote">Get a Quote<Upload/></Link>
              </Button>
              </div>
            }
          />
          
        </div>
      </div>
    </div>
  );
};

export default Home;
