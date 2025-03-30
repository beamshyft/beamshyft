import React, { useEffect } from "react";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";

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
        </div>
    );
};

export default Contact;

