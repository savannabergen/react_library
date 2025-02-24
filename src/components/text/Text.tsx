import styled from 'styled-components';
import { TextProps } from './text.types';

const StyledTextEnabled = styled.p`color: #000;`

const StyledTextDisabled = styled.p`color: #ccc; opacity: 0.5; pointer-events: none;`

export const Text = ({ children, disabled }: TextProps) => {
const TextComponent = disabled ? StyledTextDisabled : StyledTextEnabled;

return <TextComponent>{children}</TextComponent>;
};