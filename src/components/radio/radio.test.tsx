import { render, screen } from "@testing-library/react";
import { Radio } from "./Radio";
import "@testing-library/jest-dom";

describe("Radio", () => {
  test("renders visible Radio with label and checkbox", async () => {
    const label = "Radio Label";
    const checked = true;
    const onChange = jest.fn((checked: boolean) => {
      console.log("Checked:", checked);
    });
    render(<Radio label={label} checked={checked} onChange={onChange} />);
    expect(screen.getByRole("radio")).toBeChecked();
  });

  test("renders disabled Radio with label and checkbox", async () => {
    const label = "Radio Label";
    const checked = true;
    const onChange = jest.fn((checked: boolean) => {
      console.log("Checked:", checked);
    });
    render(
      <Radio label={label} checked={checked} disabled onChange={onChange} />,
    );
    expect(screen.getByRole("radio")).toBeDisabled();
  });
});
