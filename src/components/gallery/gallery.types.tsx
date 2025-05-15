export interface GalleryProps {
  title?: string;
  images: {
    src: string;
    alt: string;
    link?: string;
  }[];
}
