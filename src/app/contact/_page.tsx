import React, { useEffect } from "react";
import Image from "next/image";
import InfoSection from "@/components/info-section";
import PageHeader from "@/components/page-header";

const Contact: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="flex flex-col bg-primary-foreground mt-[70px]">
            <PageHeader
                title="Contact Us"
                description="Have any questions? Reach out to us through any of the channels below."
                imageSrc="/Imágenes Alta Catálogo ID/Filo-Muro-Evolución-2.jpg"
            />
            <div className="bg-primary-foreground flex flex-col items-center pt-20">
                <div className="flex items-start flex-row justify-center gap-4 flex-wrap max-w-[1200px]">
                    <InfoSection
                        title="Email Us"
                        titleClassName="text-5xl font-bold"
                        description={
                            <span>
                                Have questions? Send us an email at{" "}
                                <a
                                    href="mailto:start@beamshyft.com"
                                    className="text-blue-500 underline"
                                >
                                    start@beamshyft.com
                                </a>
                                .
                            </span>
                        }
                    />

                    <InfoSection
                        title="Call Us"
                        reverse
                        description={
                            <span>
                                Prefer to talk? Give us a call at{" "}
                                <a
                                    href="tel:+18574887898"
                                    className="text-blue-500 underline"
                                >
                                    +1(857)-488-7898
                                </a>
                                . We&apos;re available Monday to Friday, 9 AM to 5 PM.
                            </span>
                        }
                    />

                    <InfoSection
                        title="Follow Us"
                        description={
                            <span>
                                Stay connected through our social media channels:{" "}
                                <a
                                    href="https://twitter.com/beamshyft"
                                    className="text-blue-500 underline"
                                >
                                    Twitter
                                </a>
                                ,{" "}
                                <a
                                    href="https://facebook.com/beamshyft"
                                    className="text-blue-500 underline"
                                >
                                    Facebook
                                </a>
                                , and{" "}
                                <a
                                    href="https://linkedin.com/company/beamshyft"
                                    className="text-blue-500 underline"
                                >
                                    LinkedIn
                                </a>
                                .
                            </span>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;

