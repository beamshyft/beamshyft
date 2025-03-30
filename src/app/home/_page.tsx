"use client";
import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import { ArrowDown, ChevronsDown } from "lucide-react";
import { Upload, PencilRuler, Factory, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import InfoSection from "../../components/info-section";
import AlternatingText from "../../components/alternating-text";

import Image from "next/image";

const FeatureCard = ({
  caption,
  imageSrc,
  imageStyle,
}: {
  caption: string;
  imageSrc: string;
  imageStyle?: React.CSSProperties;
}) => {
  return (
    <div className="flex flex-col gap-2 items-center w-[130px] sm:min-w-[170px]">
      <Image
        src={imageSrc}
        objectFit="cover"
        alt="feature"
        height={100}
        width={100}
        style={imageStyle}
      />
      <p className="max-w-[110px] text-sm sm:max-w-[170px]">{caption}</p>
    </div>
  );
}

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
        className="w-full h-screen bg-black relative flex flex-col items-center justify-center" /*style={{background: "linear-gradient(0deg, #171717, transparent 20%)"}}*/
      >
        <div className="flex flex-col items-center p-8 z-[5] overflow-hidden w-full relative">
          <AlternatingText
            className="text-4xl font-extralight tracking-tight lg:text-5xl mb-[-16px] text-white"
            texts={["Cabinets", "Vanities", "Doors"]}
          />
          <h1 className="scroll-m-20 text-5xl font-bold tracking-tight lg:text-7xl text-center min-w-[365px] text-white">
            From our factory
            <br />
            <span className="font-extralight text-accent">
              to your site.
            </span>
          </h1>
          <div className="scroll-m-20 mt-12 flex flex-col sm:flex-row sm:items-center gap-2">
            <Button asChild variant="outline" size={"lg"} className="w-[190px]">
              <Link to="/catalog">Browse our catalog</Link>
            </Button>
            <Button asChild size={"lg"} className="w-[190px]">
              <Link to="/contact">Contact sales</Link>
            </Button>
          </div>
        </div>
        <div className="scroll-m-20 mt-200 text-secondary-background absolute bottom-8 z-[5]">
          <ChevronsDown
            size={50}
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }}
            color="white"
            className="cursor-pointer"
          />
        </div>
        <div className="fixed top-0 left-0 w-full h-screen overflow-hidden z-[0] opacity-50">
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
        {/* <div className="absolute right-0 top-0 w-[500px] h-full">
          <div
            className="absolute right-0 top-0 w-full h-[1000px]"
            style={{
              opacity: 0.5,
              background:
                "radial-gradient(circle at top right, hsl(var(--accent)) 0%, transparent 45%)",
            }}
          />
        </div> */}

        <div className="bg-transparent max-w-[1200px] pt-20 relative">
          <div className="bg-transparent absolute left-0 pl-[14px] md:pl-[50px] h-full pb-20 pt-10 z-0">
            <div className="border-l-2 border-primary-background h-full border-[#bbb]"></div>
          </div>
          <InfoSection
            title="Lower your construction costs"
            titleClassName="text-5xl lg:text-6xl font-bold"
            description="Eliminate the middleman and get high-quality materials for the best prices available, guaranteed."
            height="400px"
            rightChild={

              <div className="h-full w-full relative text-center">
                <Image
                  src="/animations/home3.gif"
                  objectFit="cover"
                  alt="home"
                  height={250}
                  width={250}

                  className="inline-block"
                />
              </div>
            }
          />
          <div className="p-4 flex flex-row gap-2 justify-around sm:justify-center mb-[100px] text-center flex-wrap z-[5]">
            {[
              { caption: "Carb2 compliant", imageSrc: "/animations/leaf.gif" },
              { caption: "Price match +20% off extra guaranteed", imageSrc: "/animations/price-match.gif" },
              { caption: "72 hour delivery on stock items", imageSrc: "/animations/delivery.gif" },
              { caption: "30 day money back guarantee", imageSrc: "/animations/refund.gif" },
              { caption: "2 year warranty on all products", imageSrc: "/animations/warranty.gif" },
              { caption: "No minimum order quantity, whether it’s 1 door or 1000", imageSrc: "/animations/warehouse.gif" },
              { caption: "No particle board", imageSrc: "/animations/no-particle.gif" },
              { caption: "100% reforested", imageSrc: "/animations/reforest.gif" },
            ].map((feature, index) => (
              <FeatureCard
                key={index}
                caption={feature.caption}
                imageSrc={feature.imageSrc}
                imageStyle={{ filter: `hue-rotate(${(300 / 8) * index}deg)` }}
              />
            ))}
          </div>
          <InfoSection
            reverse
            title="Unbeatable prices"
            description="We guarantee the best prices on the market. If you find a better price, we'll match it."
            titleClassName="text-4xl lg:text-5xl font-bold"
            rightChild={
              <div className="h-full w-full relative flex flex-col items-center justify-center font-semibold gap-8 bg-white p-8 rounded-lg shadow-lg border-4 border-dashed border-red-500">
                <div className="text-center">
                  <p className="text-lg md:text-xl lg:text-2xl text-black">
                    Small kitchen for
                    <span className="text-red-500 font-bold text-2xl md:text-3xl lg:text-4xl"> $3000 </span>
                    instead of&nbsp;
                    <span className="line-through text-gray-500 text-lg md:text-xl lg:text-2xl">$10,000</span>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-lg md:text-xl lg:text-2xl text-black">
                    Medium kitchen for
                    <span className="text-red-500 font-bold text-2xl md:text-3xl lg:text-4xl"> $5000 </span>
                    instead of&nbsp;
                    <span className="line-through text-gray-500 text-lg md:text-xl lg:text-2xl">$20,000</span>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-lg md:text-xl lg:text-2xl text-black">
                    Large kitchen for
                    <span className="text-red-500 font-bold text-2xl md:text-3xl lg:text-4xl"> $8,500 </span>
                    instead of&nbsp;
                    <span className="line-through text-gray-500 text-lg md:text-xl lg:text-2xl">$40,000</span>
                  </p>
                </div>
              </div>
            }
            leftChild={
              <Button asChild size={"sm"} variant="outline">
                <Link to="/catalog">Browse our Catalog</Link>
              </Button>
            }
          />
          <InfoSection
            title="How it works"
            description="In 3 simple steps, you can have your custom cabinets, vanities, and doors delivered to your site."
            titleClassName="text-4xl lg:text-5xl font-bold"
            rightChild={
              <div className="h-[400px]  w-full relative rounded-2xl overflow-hidden">
                <Image
                  id="design"
                  src="/Imágenes Alta Catálogo ID/Baño.jpg"
                  objectFit="cover"
                  layout="fill"
                  alt="American Warehouse Cabinets"
                />
              </div>
            }
            leftChild={
              <Button onClick={() => {
                const element = document.getElementById("design");
                element?.scrollIntoView({ behavior: "smooth" });
              }}>Learn More <ArrowDown />
              </Button>
            }
          />
          <InfoSection
            height="400px"
            title={<div className="gap-2 items-center "><i className="inline-block align-bottom mr-2"><PencilRuler width={30} height={30} /></i>Design and measurements</div>}
            description="Let us bring your vision to life - at no cost. Our expert team offers professional kitchen and cabinet design services, including precise on-site measurements, to ensure a perfect fit for our high-quality cabinetry. We work fast, stay friendly, and tailor every detail to your unique needs - so you can focus on what matters most: making your business shine."
            number={1}
            leftChild={
              <Button asChild size={"sm"} variant="outline">
                <Link to="/catalog">Browse our Catalog</Link>
              </Button>
            }
            rightChild={
              <div className="h-full w-full relative text-center">
                <Image
                  src="/animations/floorplans-2.gif"
                  objectFit="cover"
                  height={250}
                  width={250}
                  alt="floorplans"
                  className="inline-block"
                />
              </div>
            }
          />
          {/* <InfoSection
            title="Endless styles"
            description="We have a wide selection of cabinets, vanities, and doors to choose from. Our manufacturers can also create custom pieces to match your style."
            reverse
            leftChild={
              <Button asChild size={"sm"}>
                <Link to="/catalog">Browse our Catalog</Link>
              </Button>
            }
          /> */}
          <InfoSection
            height="400px"

            title={<div className="flex flex-row gap-2 items-center"><Factory width={30} height={30} />Manufacture</div>}
            description="We’ll manufacture your items to your exact specifications - typically in no more than two weeks - so you get the perfect fit without the wait."
            number={2}
            rightChild={
              <div className="h-full w-full relative text-center">
                <Image
                  src="/animations/lego.gif"
                  objectFit="cover"
                  height={250}
                  width={250}
                  alt="wood"
                  className="inline-block"
                />
              </div>
            }
          />
          <InfoSection
            height="400px"

            title={<div className="flex flex-row gap-2 items-center"><Truck width={30} height={30} />Deliver</div>}
            description="We'll deliver your items directly to your site, faster than you expect. Choose between unassembled or factory-assembled products - both arrive ready for quick installation, so you can keep your business moving forward."
            number={3}
            rightChild={
              <div className="h-full w-full relative text-center">
                <Image
                  src="/animations/cargo.gif"
                  objectFit="cover"
                  height={250}
                  width={250}
                  alt=""
                  className="inline-block"
                />
              </div>
            }
          />
          <InfoSection
            title="Make the shyft today"
            titleClassName="text-4xl lg:text-5xl font-bold"
            height="auto"
            description="Get started on your next project with Beamshyft. We're here to help you every step of the way."
            rightChild={
              <div className="flex flex-row gap-4 justify-center flex-wrap">
                <Button asChild size={"lg"} variant="default">
                  <Link to="/contact">Get a Quote<Upload /></Link>
                </Button>
              </div>
            }
          />
          <InfoSection
            reverse
            title="Follow Us"
            height="auto"
            titleClassName="text-4xl font-bold"
            description="Stay connected through our social media channels"
            rightChild={

              <div className="flex gap-4 justify-center">
                <Button asChild size="lg" variant="ghost">
                  <a href="https://twitter.com/beamshyft" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.5 2a4.48 4.48 0 00-4.48 4.48c0 .35.04.7.11 1.03A12.94 12.94 0 013 4.1a4.48 4.48 0 001.39 5.98A4.48 4.48 0 012 9.7v.06a4.48 4.48 0 003.6 4.4 4.48 4.48 0 01-2 .08 4.48 4.48 0 004.18 3.1A9 9 0 012 19.54a12.94 12.94 0 007 2.05c8.4 0 13-7 13-13v-.59A9.18 9.18 0 0023 3z" />
                    </svg>
                  </a>
                </Button>
                <Button asChild size="lg" variant="ghost">
                  <a href="https://facebook.com/beamshyft" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a6 6 0 00-6 6v3H6v4h3v8h4v-8h3l1-4h-4V8a2 2 0 012-2h3z" />
                    </svg>
                  </a>
                </Button>
                <Button asChild size="lg" variant="ghost">
                  <a href="https://linkedin.com/company/beamshyft" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" />
                    </svg>
                  </a>
                </Button>
              </div>
            }>
          </InfoSection>
        </div>
      </div>
    </div>
  );
};

export default Home;
