import styled from 'styled-components';

type CardProps = {
  title: string;
  description: string;
  disabled: boolean;
};

const enabledStyles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  max-width: 300px; padding: 1rem;
  h2 {  font-family: sans-serif;
        color: #ff0000;
        font-weight: bold;
        font-size: 1.25rem;
        margin-bottom: 0.5rem; }
  p { font-family: sans-serif;
      color: #333;
      font-size: 1rem; };
  }`;

const disabledStyles = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  max-width: 300px;
  padding: 1rem;
  opacity: 0.5;
  pointer-events: none;
  h2 {
        font-family: sans-serif;
        color: #ff0000;
        font-weight: bold;
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
        }
  p {
      font-family: sans-serif;
      color: #333;
      font-size: 1rem;
      };`;

export const CardComponent = ({ title, description, disabled }: CardProps) => {
  const Card = disabled ? disabledStyles : enabledStyles;
  return (
  <Card>
    <h2>{title}</h2>
    <p>{description}</p>
  </Card>
  );
};