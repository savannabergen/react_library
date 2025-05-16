import type { Meta, StoryObj } from "@storybook/react";
import Gallery from "./Gallery";

const meta = {
  title: "Components/Gallery",
  component: Gallery,
  tags: ["docsPage"],
  argTypes: {
    title: { control: { type: "text" } },
    description: { control: { type: "text" } },
    images: { control: { type: "object" } },
  },
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

const images = [
  {
    src: "https://picsum.photos/200/300",
    alt: "Image 1",
    title: "Image 1 Title",
  },
  { src: "https://picsum.photos/200/301", alt: "Image 2" },
  {
    src: "https://picsum.photos/200/302",
    alt: "Image 3",
    link: "https://www.example.com",
    title: "Image 3 Title",
  },
];

export const Default: Story = {
  args: {
    title: "My Gallery",
    description: "This is a description of my gallery",
    images,
  },
};

export const EmptyGallery: Story = {
  args: {
    title: "My Gallery",
    description: "This is a description of my gallery",
    images: [],
  },
};

export const GalleryWithAllLinks: Story = {
  args: {
    title: "My Gallery",
    description: "This is a description of my gallery",
    images: images.map((image) => ({
      ...image,
      link: "https://www.example.com",
    })),
  },
};

export const GalleryWithoutLinks: Story = {
  args: {
    title: "My Gallery",
    description: "This is a description of my gallery",
    images: images.map((image) => ({ src: image.src, alt: image.alt })),
  },
};
