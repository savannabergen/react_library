import styled from 'styled-components';

type ButtonProps = {
  children: string;
  disabled: boolean;
};

const enabledStyles = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const disabledStyles = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
`;

export const Button = ({ children, disabled }: ButtonProps) => {
  const ButtonComponent = disabled ? disabledStyles : enabledStyles;
  return <ButtonComponent>{children}</ButtonComponent>;
};