import React, { useEffect, useRef } from 'react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';


const Home: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);
    return (
        <div className='flex flex-col'>
            <section className="w-full h-screen bg-primary-background relative flex items-center justify-center">
                <div className="flex flex-col items-center p-8 z-5 overflow-hidden w-full">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        From our factory to your site
                    </h1>
                    <p className="scroll-m-20 mt-4 text-center lg:text-xl">
                        Reduce costs and overhead for your development projects by sourcing your materials from us.
                    </p>
                    <div className="scroll-m-20 mt-8 space-x-2">
                        <Button variant="outline">Browse our Catalog</Button>
                        <Button>Get a Quote</Button>
                    </div>
                </div>
                <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1] bg-secondary opacity-50">
                    <video
                        // ref={videoRef}
                        // autoPlay
                        loop
                        muted
                        className="min-w-full min-h-full absolute object-cover"
                    >
                        <source src="/stock-vid.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>
            <section className="w-full bg-secondary">
                <div className="grid grid-cols-3 gap-4 p-8">
                    <div className="col-span-1">
                        <h2 className="text-2xl font-bold">Our Services</h2>
                        <p className="mt-4">
                            We provide a wide range of services to help you get your project off the ground.
                        </p>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 gap-4">
                        <div className="col-span-1">
                            <Card className='p-4'>
                                <h3 className="text-xl font-bold">Design</h3>
                                <p className="mt-4">
                                    Our team of expert designers will work with you to create a plan that meets your needs.
                                </p>
                            </Card>
                        </div>
                        <div className="col-span-1">
                            <Card className='p-4'>
                                <h3 className="text-xl font-bold">Manufacturing</h3>
                                <p className="mt-4">
                                    Our state-of-the-art manufacturing facility can produce the materials you need quickly and efficiently.
                                </p>
                            </Card>
                        </div>
                        <div className="col-span-1">
                            <Card className='p-4'>
                                <h3 className="text-xl font-bold">Delivery</h3>
                                <p className="mt-4">
                                    Our fleet of trucks can deliver your materials directly to your site, saving you time and money.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;