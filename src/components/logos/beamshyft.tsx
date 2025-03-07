import React from 'react';
import PropTypes from 'prop-types';

const BeamshyftLogo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>> = (props) => {
    return (<img
        src="/beamshyft_white.PNG"
        alt="Beamshyft Logo"
        width={props.width || 164}
        className="invert dark:invert-0 block"
        {...props}
      />);
    };
BeamshyftLogo.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default BeamshyftLogo;