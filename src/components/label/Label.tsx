import styled from 'styled-components';

type LabelProps = {
  children: string;
  disabled?: boolean;
};

const StyledLabelEnabled = styled.span``;
const StyledLabelDisabled = styled.span`pointer-events: none; opacity: 0.5;`

export const Label = ({ children, disabled }: LabelProps) => {
  const LabelComponent = disabled ? StyledLabelDisabled : StyledLabelEnabled;
  return <LabelComponent>{children}</LabelComponent>;
};