import { render, screen } from "@testing-library/react";
import { Table } from "./Table";
import "@testing-library/jest-dom";

describe("Table", () => {
  test("renders enabled Table with headers and children", async () => {
    const headers = ["Header 1", "Header 2"];
    const children = (
      <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
      </tr>
    );
    render(<Table headers={headers}>{children}</Table>);
    expect(screen.getByRole("table")).toBeEnabled();
  });

  test("renders disabled Table with headers and children", async () => {
    const headers = ["Header 1", "Header 2"];
    const children = (
      <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
      </tr>
    );
    render(
      <Table headers={headers} disabled>
        {children}
      </Table>,
    );
    expect(screen.getByRole("table")).toHaveStyle("opacity: 0.5");
  });
});
