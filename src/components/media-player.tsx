import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Play } from 'lucide-react';
import { X } from 'lucide-react';
import YouTube from "react-youtube";
const SimplePlayer = () => {

    const openPlayer = () => {
        setOpen(true);
        document.getElementById("player-container")?.classList.add("show");
        document.getElementById("player-container")?.classList.remove("hide");
        document.body.classList.add("stop-scrolling");
    }
    const closePlayer = () => {
        setOpen(false);
        document.getElementById("player-container")?.classList.add("hide");
        document.getElementById("player-container")?.classList.remove("show");
        document.body.classList.remove("stop-scrolling");
    }
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            closePlayer();
        }
    }
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const togglePlayer = () => {
        setOpen(!open);
        if (open) {
            closePlayer();
        } else {
            openPlayer();
        }
    };

    const [open, setOpen] = useState(false);
    return (
        <div className='absolute bottom-[240px]'>
            <style>{`
                #player-container.hide {
                    opacity: 0;
                    visibility: hidden;
                }
                #player-container.show {
                    display: flex;
                    opacity: 1;
                    transition: opacity 0.3s ease-in-out;
                }
                    `}
            </style>
            <Button variant="play" onClick={() => { togglePlayer() }}><Play fill='hsl(var(--accent))' style={{ width: 26, height: 26 }} /> Play video</Button>
            <div id="player-container" className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black z-[100] hide py-20"
            >
                {open &&
                    (
                        <>
                            <YouTube videoId="Gbosg4HKKJg" className="w-full h-full flex items-center justify-center" opts={{ playerVars: { autoplay: 1, mute: 0 }, height: "100%", width: "100%" }} />
                            <Button variant="default" className='absolute right-[12px] top-[12px] w-10 h-10 text-xl' onClick={() => { togglePlayer() }}><X style={{ width: 26, height: 26 }} /></Button>
                        </>
                    )

                }

            </div>
        </div>
    );
};

export default SimplePlayer;