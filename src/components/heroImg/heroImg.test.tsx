import { render, screen } from "@testing-library/react";
import HeroImg from "./heroImg";
import "@testing-library/jest-dom";

describe("HeroImg", () => {
  test("renders visible HeroImg with image source and alt text", async () => {
    const src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNer1ZryNxWVXojlY9Hoyy1-4DVNAmn7lrg&s";
    const alt = "Hero Image";
    render(<HeroImg src={src} alt={alt} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", src);
    expect(screen.getByRole("img")).toHaveAttribute("alt", alt);
  });

  test("renders disabled HeroImg with image source and alt text", async () => {
    const src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVNer1ZryNxWVXojlY9Hoyy1-4DVNAmn7lrg&s";
    const alt = "Hero Image";
    render(<HeroImg src={src} alt={alt} disabled />);
    expect(screen.getByRole("img")).toHaveAttribute("src", src);
    expect(screen.getByRole("img")).toHaveAttribute("alt", alt);
  });
});
