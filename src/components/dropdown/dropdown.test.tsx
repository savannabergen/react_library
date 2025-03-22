import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";
import "@testing-library/jest-dom";

describe("Dropdown", () => {
  test("renders visible dropdown with button and menu items", async () => {
    const buttonText = "Dropdown Button";
    const menuItems = ["Item 1", "Item 2", "Item 3"];
    render(<Dropdown buttonText={buttonText} menuItems={menuItems} />);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
    expect(screen.getAllByRole("paragraph")).toHaveLength(menuItems.length);
  });

  test("renders disabled dropdown with button and menu items", async () => {
    const buttonText = "Dropdown Button";
    const menuItems = ["Item 1", "Item 2", "Item 3"];
    render(<Dropdown buttonText={buttonText} menuItems={menuItems} disabled />);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
    expect(screen.getAllByRole("paragraph")).toHaveLength(menuItems.length);
  });
});
dfgdfdfgdfgdfasdasdasd
