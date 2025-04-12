import styled from "styled-components";
import { ButtonProps } from './button.types'

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

export const Button = ({ children, disabled, onClick, ...props }: ButtonProps) => {
  const ButtonComponent = disabled ? disabledStyles : enabledStyles;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(event);
    console.log('Button clicked!');
  };

  if (disabled) {
    return <ButtonComponent {...props} disabled>{children}</ButtonComponent>;
  }

  return <ButtonComponent {...props} onClick={handleClick}>{children}</ButtonComponent>;
};

