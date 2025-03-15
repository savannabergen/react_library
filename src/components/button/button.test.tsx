import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  test("renders enabled button with correct text", async () => {
    render(<Button disabled={false}>Button Text</Button>);
    expect(screen.getByText("Button Text")).toBeInTheDocument();
  });

  test("renders disabled button with correct text", async () => {
    render(<Button disabled>Disabled Button</Button>);
    expect(screen.getByText("Disabled Button")).toBeInTheDocument();
  });
});
