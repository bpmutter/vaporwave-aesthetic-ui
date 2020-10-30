import React from "react";
import { Flex as RebassFlex } from "rebass";
import PropTypes from "prop-types";
import theme from "../style/theme";

const darkStyle = {
  backgroundColor: theme.colors.darkBackground,
  color: theme.colors.lightText,
};

export default function Flex({ children, dark, ...props }) {
  return (
    <RebassFlex style={dark ? darkStyle : null} {...props}>
      {children}
    </RebassFlex>
  );
}

Flex.propTypes = {
  dark: PropTypes.bool,
};
