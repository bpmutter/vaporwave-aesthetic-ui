import React from "react";
import Box from "./Box";

export default function AppBar({ children, ...props }) {
  return <Box {...props}>{children}</Box>;
}
