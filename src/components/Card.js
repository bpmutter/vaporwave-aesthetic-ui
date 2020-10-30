import React from "react";
import { Card as RebassCard } from "rebass";
import PropTypes from "prop-types";
import theme from "../style/theme";

const darkStyle = {
  backgroundColor: theme.colors.darkBackground,
  color: theme.colors.lightText,
};

export default function Card({ children, dark, ...props }) {
  return (
    <RebassCard style={dark ? darkStyle : null} {...props}>
      {children}
    </RebassCard>
  );
}

Card.propTypes = {
  dark: PropTypes.bool,
};
