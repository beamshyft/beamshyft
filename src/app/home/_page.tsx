"use client";
import React, { useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import { ArrowDown, ChevronsDown } from "lucide-react";
import { Upload, PencilRuler, Factory, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import InfoSection from "../../components/info-section";
import AlternatingText from "../../components/alternating-text";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

import SimplePlayer from "@/components/media-player";
import Testimonial from "@/components/testimonial";

const FeatureCard = ({
  caption,
  imageSrc,
  imageStyle,
  index = 0,
}: {
  caption: string;
  imageSrc: string;
  imageStyle?: React.CSSProperties;
  index?: number;
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    delay: 500,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-2 items-center w-[130px] sm:min-w-[170px] transition-opacity duration-1000`}
      style={{
        opacity: inView ? 1 : 0,
        transitionDelay: `${index * 100}ms`,
      }}
    >
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
};

const PriceCard = ({ children }: { children: React.ReactNode }) => {

  return (
    <div
      className={`h-full w-full relative flex flex-col items-center justify-center font-semibold`}
    >
      {children}
    </div>
  );
};

const isMobileBrowser = () => {
  if (typeof navigator === "undefined") return false;
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const isPlayingRef = useRef(isPlaying);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileBrowser());
  }, []);

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
      {!isMobile && (
      <section
        className="w-full h-screen bg-black relative flex flex-col items-center justify-center" /*style={{background: "linear-gradient(0deg, #171717, transparent 20%)"}}*/
      >
        <div className="flex flex-col items-center p-8 z-[6] overflow-hidden w-full">
          <AlternatingText
            className="text-4xl font-extralight tracking-tight lg:text-5xl mb-[-16px] text-white"
            texts={["Cabinets", "Vanities", "Doors"]}
          />
          <h1 className="scroll-m-20 text-5xl font-bold tracking-tight lg:text-7xl text-center min-w-[320px] text-white">
            From our factory
            <br />
            <span className="font-extralight text-accent">
              to you
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
        <div className="scroll-m-20 mt-200 text-secondary-background absolute bottom-8 z-[2]">
          <div
            className="relative cursor-pointer animate-bounce"
            onClick={() => {
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }}
          >
            <ChevronsDown
              size={50}
              color="white"
              style={{
                maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
              }}
            />
          </div>
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
            <source src="/Beamshyft_Introduction.mp4" type="video/mp4" />
          </video>
        </div>
        
        <SimplePlayer />
      </section>
      )}
      <div className="bg-primary-foreground flex justify-center relative z-[6]">
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

        <div className="bg-transparent max-w-[1200px] pt-20 relative overflow-hidden">
          <div className="bg-transparent absolute left-0 pl-[14px] md:pl-[50px] h-full pb-20 pt-10 -z-[5]">
            <div className="border-l-2 border-primary-background h-full"></div>
          </div>
          <InfoSection
            title="Lower your material costs by up to 75%"
            titleClassName="text-6xl lg:text-7xl font-bold"
            description={
              <>
              <span className="text-xl font-normal">
                Eliminate the middleman and get high-quality materials at the best prices available, guaranteed.
              </span>
              </>
            }
            height="400px"
            rightChild={

              <div className="h-full w-full relative text-center items-center flex justify-center">
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
          <div className="p-4 flex flex-row justify-center items-center gap-4 pt-10">
            <div className="flex flex-row gap-6 justify-center mb-[100px] text-center flex-wrap z-[5] max-w-[780px]">
              {[
                { caption: "No particle board", imageSrc: "/animations/no-particle.gif" },
                { caption: "Price match +20% off extra guaranteed", imageSrc: "/animations/price-match.gif" },
                { caption: "72 hour delivery on stock items", imageSrc: "/animations/delivery.gif" },
                { caption: "30 day money back guarantee", imageSrc: "/animations/refund.gif" },
                { caption: "2 year warranty on all products", imageSrc: "/animations/warranty.gif" },
                { caption: "No minimum order quantity", imageSrc: "/animations/warehouse.gif" },
                { caption: "Carb2 compliant", imageSrc: "/animations/leaf.gif" },
                { caption: "100% reforested", imageSrc: "/animations/reforest.gif" },
              ].map((feature, index) => (
                <FeatureCard
                  key={index}
                  index={index}
                  caption={feature.caption}
                  imageSrc={feature.imageSrc}
                  imageStyle={{ filter: `hue-rotate(${(300 / 8) * index}deg)` }}
                />
              ))}
            </div>
          </div>
          <InfoSection
            reverse
            title="Unbeatable prices"
            description="We guarantee the best prices on the market. If you find a better price, we'll match it."
            titleClassName="text-4xl lg:text-5xl font-bold"
            rightChild={


              <div className="flex flex-col  gap-8 bg-white p-8 shadow-lg  text-center border-2 border-black/10">
                <PriceCard>
                    <p className="text-lg md:text-xl lg:text-2xl text-black">
                    Small solid wood kitchen for
                      <span className="text-green-500 font-bold text-2xl md:text-3xl lg:text-4xl"> $3000 </span>
                      instead of&nbsp;
                      <span className="line-through text-red-500 text-lg md:text-xl lg:text-2xl">$10,000</span>
                    </p>
                </PriceCard>
                <PriceCard>
                    <p className="text-lg md:text-xl lg:text-2xl text-black">
                    Medium solid wood kitchen for
                      <span className="text-green-500 font-bold text-2xl md:text-3xl lg:text-4xl"> $5000 </span>
                      instead of&nbsp;
                      <span className="line-through text-red-500 text-lg md:text-xl lg:text-2xl">$20,000</span>
                    </p>
                </PriceCard>
                <PriceCard>
                    <p className="text-lg md:text-xl lg:text-2xl text-black">
                    Large solid wood kitchen for
                      <span className="text-green-500 font-bold text-2xl md:text-3xl lg:text-4xl"> $8,500 </span>
                      instead of&nbsp;
                      <span className="line-through text-red-500 text-lg md:text-xl lg:text-2xl">$40,000</span>
                    </p>
                </PriceCard>
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
            titleClassName="text-5xl lg:text-6xl font-bold"
            rightChild={
                <div className="h-[400px] w-full relative overflow-hidden shadow-xl">
                <Image
                  id="design"
                  src="/white_shaker_kitchen_cropped_from_cabinet_3.jpg"
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
            description="Our team takes care of onsite measurements, and we offer fast, free design services tailored precisely to your project’s vision and timeline."
            number={1}
            leftChild={
              <Button asChild size={"sm"} variant="outline">
                <Link to="/catalog">Browse our Catalog</Link>
              </Button>
            }
            rightChild={
              <div className="h-full w-full relative text-center">
                <Image
                  src="/animations/blueprint.gif"
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
            description="Our factories manufacture your items to your exact specifications so you get the perfect fit for your design."
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
            description="We deliver your items directly to your site exactly as you need them, unassembled to save space or factory assembled for quick installation."
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
          
          <div className="flex flex-row gap-4 justify-center items-start mb-10 relative flex-wrap z-[5] p-4">
            <Testimonial name="Moses Rezaei" title="11 Billow Ave, Revere, MA 02151" message="Solid communication and regular updates on the status. They beat pricing I did not expect them to beat. I'll be buying from them again." />
            <Testimonial name="Paul Goulas" title="101 E Hadley Rd, Amherst, MA 01002" message="These guys are awesome! I was a bit skeptical at first, but they really impressed me with their quick responses and attention to detail. I made several changes along the way, and they were super accommodating every time. They sent me multiple design options to choose from, which no other company has done for us before. They never rushed the process and seemed dedicated to providing great service and a quality product. I highly recommend it!" />
          </div>
          {isMobile && (
          <section className="flex flex-col items-center justify-center bg-secondary-background py-10 relative">
            <video
              controls
              poster="/Beamshyft_Introduction.mp4"
              className="min-w-full min-h-full object-cover"
            >
              <source src="/Beamshyft_Introduction.mp4" type="video/mp4" />
            </video>
          </section>)}
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

              <div className="flex gap-x-4 gap-y-8 justify-center flex-wrap">
                <Button asChild size="lg" variant="ghost">
                    <a href="https://x.com/beamshyft" aria-label="X">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Layer_1" width="24px" height="24px" viewBox="0 0 24 24"><path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"/></svg>
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
                <Button asChild size="lg" variant="ghost">
                  <a href="https://instagram.com/beamshyft" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 26 26">
<path d="M 7.546875 0 C 3.390625 0 0 3.390625 0 7.546875 L 0 18.453125 C 0 22.609375 3.390625 26 7.546875 26 L 18.453125 26 C 22.609375 26 26 22.609375 26 18.453125 L 26 7.546875 C 26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2 L 18.453125 2 C 21.527344 2 24 4.46875 24 7.546875 L 24 18.453125 C 24 21.527344 21.53125 24 18.453125 24 L 7.546875 24 C 4.472656 24 2 21.53125 2 18.453125 L 2 7.546875 C 2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4 C 19.671875 4 19 4.671875 19 5.5 C 19 6.328125 19.671875 7 20.5 7 C 21.328125 7 22 6.328125 22 5.5 C 22 4.671875 21.328125 4 20.5 4 Z M 13 6 C 9.144531 6 6 9.144531 6 13 C 6 16.855469 9.144531 20 13 20 C 16.855469 20 20 16.855469 20 13 C 20 9.144531 16.855469 6 13 6 Z M 13 8 C 15.773438 8 18 10.226563 18 13 C 18 15.773438 15.773438 18 13 18 C 10.226563 18 8 15.773438 8 13 C 8 10.226563 10.226563 8 13 8 Z"></path>
</svg></a>
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
