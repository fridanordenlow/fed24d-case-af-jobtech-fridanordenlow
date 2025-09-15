// DigiHeaderWrapper.tsx
import React from "react";
import reactLogo from "../assets/images/avatar.png";

interface DigiHeaderProps extends React.HTMLAttributes<HTMLElement> {
  "af-logo-src"?: string;
  "af-logo-alt"?: string;
  "af-logo-href"?: string;
  "af-system-name"?: string;
  "af-hide-system-name"?: boolean | "true" | "false";
  "af-menu-button-text"?: string;
  children?: React.ReactNode;
}

export const DigiHeaderWrapper: React.FC<DigiHeaderProps> = (props) => {
  return React.createElement("digi-header", props, props.children);
};
