import styled from 'styled-components';

type RadioProps = {
  label: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
};

type RadioInputProps = {
  checked: boolean;
  disabled?: boolean;
  onChange: (e: any) => void;
};

const StyledRadioInputEnabled = styled.input``;
const StyledRadioInputDisabled = styled.input`pointer-events: none; opacity: 0.5;`

const StyledLabelEnabled = styled.span``;
const StyledLabelDisabled = styled.span`pointer-events: none; opacity: 0.5;`

const RadioInput = ({ checked, disabled }: RadioInputProps) => {
  const RadioComponent = disabled ? StyledRadioInputDisabled : StyledRadioInputEnabled;
  return <RadioComponent type="radio" checked={checked} />;
};

export const Label = ({ children, disabled }: { children: string; disabled?: boolean; }) => {
  const LabelComponent = disabled ? StyledLabelDisabled : StyledLabelEnabled;
  return <LabelComponent>{children}</LabelComponent>;
};

export const Radio = ({ label, checked, disabled, onChange }: RadioProps) => {
  return (
    <div>
    <RadioInput checked={checked} disabled={disabled} onChange={(e) => onChange(e.target.checked)} />
    <Label disabled={disabled}>{label}</Label>
    </div>
  );
};