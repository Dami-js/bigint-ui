import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  size?: number;
}

const Button = styled.button<ButtonProps>`
  font-size: 24px;
  color: #4d4d4d;
  color: tomato;
`;

export default Button;
