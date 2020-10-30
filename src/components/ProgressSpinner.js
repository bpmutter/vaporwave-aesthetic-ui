import React from "react";
import { Spinner } from "theme-ui";
import PropTypes from "prop-types";

export default function ProgressSpinner({ color, ...props }) {
  return <Spinner {...props} color={color || "muted"} />;
}

ProgressSpinner.propTypes = {
  color: PropTypes.string,
};
