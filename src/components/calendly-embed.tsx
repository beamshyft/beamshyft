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
            data-url="https://calendly.com/joel-beamshyft?primary_color=d0ac81"
            style={{ width: '500px', height: '900px', minWidth: "320px", minHeight: '700px' }}
        ></div>
    );
};

export default CalendlyEmbed;