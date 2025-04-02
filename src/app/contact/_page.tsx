import React, { useEffect } from "react";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import InfoSection from "@/components/info-section";
import CalendlyEmbed from "@/components/calendly-embed";

const Contact: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col bg-primary-foreground mt-[70px]">
            <PageHeader
                title="Get in touch"
                description="Hours are 24/7. Call, text, or email us anytime to learn more or start a quote process."
                imageSrc="/Imágenes Alta Catálogo ID/Filo-Muro-Evolución-2.jpg"
            >
                <div className="flex flex-col gap-4 mt-8">
                    
                <Button asChild size="lg" variant="default">
                <a
                    href="tel:+18574887898"
                    className="underline text-xl"
                >
                    +1 (857) 488-7898
                </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                <a
                    href="mailto:start@beamshyft.com"
                    className="underline text-xl"
                >
                    start@beamshyft.com
                </a>
                </Button>
                
                </div>
            </PageHeader>
            <div className="bg-primary-foreground flex justify-center relative">
                <div className="bg-transparent w-[1200px] pt-20 relative">
                    <InfoSection
                        title="Or book a meeting"
                        description="We can schedule a call to discuss your needs and how we can help you."
                        // height="600px"
                        titleClassName="text-4xl font-bold text-center"
                        rightChild={
                            <CalendlyEmbed
                                    url="https://calendly.com/joel-beamshyft?primary_color=d0ac81"/>
                        }
                        />
                </div>
            </div>
        </div >
    );
};

export default Contact;

