import styled from "styled-components";
import { FormProps } from "./form.types";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border: none;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  max-width: 500px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
`;

const FieldContainer = styled.div`
  margin-bottom: 25px;
  width: 100%;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  display: block;
  text-align: left;
`;

const Input = styled.input`
  padding: 15px;
  border: none;
  border-radius: 10px;
  width: 100%;
  font-size: 16px;
  background-color: #f2f2f2;
  transition: background-color 0.3s ease;
  box-sizing: border-box;

  &:focus {
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 15px;
  border: none;
  border-radius: 10px;
  width: 100%;
  font-size: 16px;
  background-color: #f2f2f2;
  resize: vertical;
  transition: background-color 0.3s ease;
  box-sizing: border-box;

  &:focus {
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  background-color: #808080;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #666;
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Form = ({ fields, buttonText, onSubmit, children }: FormProps) => (
  <FormContainer onSubmit={onSubmit}>
    {fields.map((field) => (
      <FieldContainer key={field.name}>
        <Label htmlFor={field.name}>{field.label}</Label>
        {field.type === "textarea" ? (
          <TextArea
            id={field.name}
            name={field.name}
            value={field.value}
            onChange={field.onChange}
          />
        ) : (
          <Input
            id={field.name}
            type={field.type}
            name={field.name}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      </FieldContainer>
    ))}
    <SubmitButton type="submit">{buttonText}</SubmitButton>
    {children}
  </FormContainer>
);

export default Form;
