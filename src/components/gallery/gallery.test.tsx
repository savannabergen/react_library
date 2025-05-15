import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // Add this line
import Gallery from "./Gallery";

describe("Gallery component", () => {
  const images = [
    { src: "image1.jpg", alt: "Image 1" },
    { src: "image2.jpg", alt: "Image 2" },
    { src: "image3.jpg", alt: "Image 3" },
  ];

  it("renders title and images", () => {
    render(<Gallery title="My Gallery" images={images} />);
    expect(screen.getByText("My Gallery")).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(3);
  });

  it("renders images without title", () => {
    render(<Gallery images={images} />);
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(3);
  });

  it("renders nothing when images are empty", () => {
    render(<Gallery title="My Gallery" images={[]} />);
    expect(screen.getByText("My Gallery")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
