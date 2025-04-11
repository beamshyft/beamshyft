import React, { useState, useRef, useEffect } from 'react';
import {
    MediaController,
    MediaControlBar,
    MediaTimeRange,
    MediaTimeDisplay,
    MediaVolumeRange,
    MediaPlayButton,
    MediaSeekBackwardButton,
    MediaSeekForwardButton,
    MediaMuteButton,
} from 'media-chrome/react';
import { Button } from './ui/button';
import { Play } from 'lucide-react';
import { X } from 'lucide-react';

const SimplePlayer = ({ src }: { src: string; }) => {
    function disableScroll() {
        document.body.classList.add("stop-scrolling");
    }

    function enableScroll() {
        document.body.classList.remove("stop-scrolling");
    }

    // Close when escape key is pressed
    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setOpen(false);
            enableScroll();
            document.getElementById("player-container")?.classList.remove("show");
            document.getElementById("player-container")?.classList.add("hide");
            playerRef.current?.pause();
        }
    }
    // Add event listener for keydown event
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const togglePlayer = () => {
        setOpen(!open);
        if (open) {
            enableScroll();
            document.getElementById("player-container")?.classList.add("hide");
            document.getElementById("player-container")?.classList.remove("show");
            playerRef.current?.pause();
        } else {
            document.getElementById("player-container")?.classList.add("show");
            document.getElementById("player-container")?.classList.remove("hide");
            setTimeout(disableScroll,300);
        }
    };

    const [open, setOpen] = useState(false);
    const playerRef = useRef<HTMLVideoElement>(null);
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
            <div id="player-container" className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black z-[100] hide"
            >
                <MediaController className='min-w-[320px] '>
                    <video
                        slot="media"
                        src={src}
                        preload="auto"
                        ref={playerRef}
                        crossOrigin=""
                    />
                    <MediaControlBar>
                        <MediaPlayButton></MediaPlayButton>
                        <MediaSeekBackwardButton></MediaSeekBackwardButton>
                        <MediaSeekForwardButton></MediaSeekForwardButton>
                        <MediaTimeRange></MediaTimeRange>
                        <MediaTimeDisplay showDuration></MediaTimeDisplay>
                        <MediaMuteButton></MediaMuteButton>
                        <MediaVolumeRange></MediaVolumeRange>
                    </MediaControlBar>
                </MediaController>
                <Button variant="default" className='absolute right-[12px] top-[12px] w-10 h-10 text-xl' onClick={() => { togglePlayer() }}><X style={{ width: 26, height: 26 }}/></Button>

            </div>
        </div>
    );
};

export default SimplePlayer;