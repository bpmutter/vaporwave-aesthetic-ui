import React from "react";
import { Heading as RebassHeading } from "rebass";

export default function Heading({ children, ...props }) {
  return <RebassHeading {...props}>{children}</RebassHeading>;
}
