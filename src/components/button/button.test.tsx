import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import '@testing-library/jest-dom';

describe("Button", () => {
  test("renders enabled button with correct text", async () => {
  render(< Button disabled={false}>Button Text</Button>);
  expect(screen.getByText("Button Text")).toBeInTheDocument();
});

test("renders disabled button with correct text", async () => {
  render(<Button disabled>Disabled Button</Button>);
  expect(screen.getByText("Disabled Button")).toBeInTheDocument();
});

test("applies disabled styles when disabled prop is true", async () => {
  render(<Button disabled>Disabled Button</Button>);
  expect(screen.getByText("Disabled Button")).toHaveStyle({
    opacity: 0.5,
    pointerEvents: "none",
    cursor: "not-allowed",
  });
});

test("does not apply disabled styles when disabled prop is false", async () => {
  render(<Button disabled={false}>Button Text</Button>);
  expect(screen.getByText("Button Text")).not.toHaveStyle({
    opacity: 0.5,
    pointerEvents: "none",
    cursor: "not-allowed",
    });
  });
});