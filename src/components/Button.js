import React from "react";
import { Button as RebassButton } from "rebass";

export default function Button({ children, ...props }) {
  return (
    <RebassButton {...props} className="glow-button">
      {children}
    </RebassButton>
  );
}
