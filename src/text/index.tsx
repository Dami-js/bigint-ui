import React from "react";

export interface TextProps {
  label: string;
}

function Text({ label }: TextProps) {
  return <p>{label}</p>;
}

export default Text;
