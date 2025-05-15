import type { Meta, StoryObj } from "@storybook/react";
import Gallery from "./Gallery";

const meta = {
  title: "Components/Gallery",
  component: Gallery,
  tags: ["docsPage"],
  argTypes: {
    title: { control: { type: "text" } },
    images: { control: { type: "object" } },
  },
} satisfies Meta<typeof Gallery>;

export default meta;

type Story = StoryObj<typeof meta>;

const images = [
  {
    src: "https://picsum.photos/200/300",
    alt: "Image 1",
    link: "https://www.example.com",
  },
  { src: "https://picsum.photos/200/301", alt: "Image 2" },
  {
    src: "https://picsum.photos/200/302",
    alt: "Image 3",
    link: "https://www.example.com",
  },
];

export const Default: Story = {
  args: {
    title: "My Gallery",
    images,
  },
};

export const NoTitle: Story = {
  args: {
    images,
  },
};

export const EmptyImages: Story = {
  args: {
    title: "My Gallery",
    images: [],
  },
};

export const WithLinks: Story = {
  args: {
    title: "My Gallery",
    images: [
      {
        src: "https://picsum.photos/200/300",
        alt: "Image 1",
        link: "https://www.example.com",
      },
      {
        src: "https://picsum.photos/200/301",
        alt: "Image 2",
        link: "https://www.example.com",
      },
      {
        src: "https://picsum.photos/200/302",
        alt: "Image 3",
        link: "https://www.example.com",
      },
    ],
  },
};

export const WithoutLinks: Story = {
  args: {
    title: "My Gallery",
    images: [
      { src: "https://picsum.photos/200/300", alt: "Image 1" },
      { src: "https://picsum.photos/200/301", alt: "Image 2" },
      { src: "https://picsum.photos/200/302", alt: "Image 3" },
    ],
  },
};
