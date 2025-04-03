import React, { useEffect } from 'react';

const CalendlyEmbed: React.FC = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/armia-beamshyft/30min?primary_color=d0ac81"
            style={{ height: 'inherit', minWidth: "320px", width: "inherit"}}
        ></div>
    );
};

export default CalendlyEmbed;