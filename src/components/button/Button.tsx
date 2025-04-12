import styled from "styled-components";
import { ButtonProps } from "./button.types";

const enabledStyles = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const disabledStyles = styled.button`
  background-color: #ccc; /* Changed to a more distinguishable color */
  color: #666;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: not-allowed;
  opacity: 0.5;
`;

export const Button = ({ children, disabled, ...props }: ButtonProps) => {
  const ButtonComponent = disabled ? disabledStyles : enabledStyles;
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
};
