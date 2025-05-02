import styled, { keyframes } from "styled-components";
import { ButtonProps } from "./button.types";

const neonGlow = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(57, 255, 20, 0.5), 0 0 20px rgba(57, 255, 20, 0.3), 0 0 30px rgba(57, 255, 20, 0.1);
    text-shadow: 0 0 5px rgba(57, 255, 20, 0.5);
  }
  50% {
    box-shadow: 0 0 15px rgba(57, 255, 20, 0.7), 0 0 30px rgba(57, 255, 20, 0.5), 0 0 45px rgba(57, 255, 20, 0.3);
    text-shadow: 0 0 10px rgba(57, 255, 20, 0.7);
  }
  100% {
    box-shadow: 0 0 10px rgba(57, 255, 20, 0.5), 0 0 20px rgba(57, 255, 20, 0.3), 0 0 30px rgba(57, 255, 20, 0.1);
    text-shadow: 0 0 5px rgba(57, 255, 20, 0.5);
  }
`;

const enabledStyles = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const disabledStyles = styled.button`
  background-color: #ccc;
  color: #666;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: not-allowed;
  opacity: 0.5;
`;

const neonStyles = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(57, 255, 20, 0.5), 0 0 20px rgba(57, 255, 20, 0.3), 0 0 30px rgba(57, 255, 20, 0.1);
  text-shadow: 0 0 5px rgba(57, 255, 20, 0.5);
  animation: ${neonGlow} 1.5s infinite;
`;

const disabledNeonStyles = styled.button`
  background-color: #000;
  color: #33cc33;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: not-allowed;
  opacity: 0.5;
  box-shadow:
    0 0 5px #33cc33,
    0 0 10px #33cc33;
  text-shadow: 0 0 2px #33cc33;
`;

export const Button = ({
  children,
  variant,
  disabled,
  onClick,
  ...props
}: ButtonProps) => {
  let ButtonComponent;
  if (variant === "neon") {
    ButtonComponent = disabled ? disabledNeonStyles : neonStyles;
  } else {
    ButtonComponent = disabled ? disabledStyles : enabledStyles;
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(event);
    console.log("Button clicked!");
  };

  return (
    <ButtonComponent
      {...props}
      disabled={disabled}
      onClick={!disabled ? handleClick : undefined}
    >
      {children}
    </ButtonComponent>
  );
};
