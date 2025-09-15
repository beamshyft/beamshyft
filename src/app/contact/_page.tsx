import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import InfoSection from "@/components/info-section";
import CalendlyEmbed from "@/components/calendly-embed";
import Image from "next/image";
import Testimonial from "@/components/testimonial";
const Contact: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Beamshyft | Contact Sales";
        return () => {
            document.title = "Beamshyft";
        }
    }, []);

    return (
        <div className="flex flex-col bg-primary-foreground mt-[70px] z-[6] md:items-center">
	  <div className="text-5xl md:text-9xl text-center p-4">
	  Contact Sales
	  </div>
	  <div className="flex flex-col md:flex-row gap-4 mt-8 items-center">

	  <Button asChild size="lg" variant="default" className="w-64" >
	  <a
	      href="tel:+18574887898"
	      className="text-xl"
	  >
	      +1 (857) 488-7898
	  </a>
	  </Button>
	  <Button asChild size="lg" variant="outline" className="w-64" >
	  <a
	      href="mailto:start@beamshyft.com"
	      className="text-xl"
	  >
	      start@beamshyft.com
	  </a>
	  </Button>

	  </div>
            <div className="bg-primary-foreground flex justify-center relative">
                <div className="bg-transparent w-[1200px] pt-20 relative">
                    <InfoSection
                        title="Book a meeting"
                        description="Schedule a call to discuss your needs and learn more."
                        height="80vh"
                        titleClassName="text-4xl font-bold text-center"
                        rightChild={
                            <div className="flex h-screen w-full align-center justify-center">
                                <CalendlyEmbed />
                            </div>
                        }
                        leftChild={<div className="h-full w-full relative text-center"><Image
                            src="/animations/meeting.gif"
                            objectFit="cover"
                            alt="home"
                            height={250}
                            width={250}
                            className="inline-block"
                            /></div>
                        }
                        />
                </div>
            </div>
        </div >
    );
};

export default Contact;

