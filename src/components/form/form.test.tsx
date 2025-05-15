import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "./Form";

describe("Form component", () => {
  const fields = [
    {
      label: "Name",
      type: "text",
      name: "name",
      value: "",
      onChange: jest.fn(),
    },
    {
      label: "Email",
      type: "email",
      name: "email",
      value: "",
      onChange: jest.fn(),
    },
    {
      label: "Message",
      type: "textarea",
      name: "message",
      value: "",
      onChange: jest.fn(),
    },
  ];

  const onSubmit = jest.fn((e) => e.preventDefault());

  it("renders form fields and submit button", () => {
    const { getByText } = render(
      <Form fields={fields} buttonText="Submit" onSubmit={onSubmit} />,
    );
    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Email")).toBeInTheDocument();
    expect(getByText("Message")).toBeInTheDocument();
    expect(getByText("Submit")).toBeInTheDocument();
  });

  it("calls onChange handler when input value changes", () => {
    const { getByLabelText } = render(
      <Form fields={fields} buttonText="Submit" onSubmit={onSubmit} />,
    );
    const nameInput = getByLabelText("Name");
    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    expect(fields[0].onChange).toHaveBeenCalledTimes(1);
  });

  it("calls onSubmit handler when form is submitted", () => {
    const { getByText } = render(
      <Form fields={fields} buttonText="Submit" onSubmit={onSubmit} />,
    );
    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it("renders children", () => {
    const childText = "Hello World!";
    const { getByText } = render(
      <Form fields={fields} buttonText="Submit" onSubmit={onSubmit}>
        <div>{childText}</div>
      </Form>,
    );
    expect(getByText(childText)).toBeInTheDocument();
  });
});
