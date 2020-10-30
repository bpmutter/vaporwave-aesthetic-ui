import React from "react";
import { Text as RebassText } from "rebass";

export default function Text({ children, ...props }) {
  return <RebassText {...props}>{children}</RebassText>;
}
