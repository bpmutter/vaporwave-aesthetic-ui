import React from "react";
import { Image as RebassImage } from "rebass";
import PropTypes from "prop-types";

export default function Image({ src, alt, ...props }) {
  return <RebassImage src={src} alt={alt} {...props} />;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
