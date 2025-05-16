export interface Image {
  src: string;
  alt: string;
  link?: string;
  title?: string;
  description?: string;
}

export interface GalleryProps {
  title?: string;
  description?: string;
  images: Image[];
}

