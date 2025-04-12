import { render, screen } from "@testing-library/react";
import { CardComponent } from "./card";
import "@testing-library/jest-dom";

describe("CardComponent", () => {
  test("renders enabled card with correct title and description", async () => {
    render(
      <CardComponent title="Card Title" disabled={false}>
        Card Description
      </CardComponent>,
    );
    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card Description")).toBeInTheDocument();
  });

  test("renders disabled card with correct title and description", async () => {
    render(
      <CardComponent title="Card Title" disabled>
        Card Description
      </CardComponent>,
    );
    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card Description")).toBeInTheDocument();
  });
});
