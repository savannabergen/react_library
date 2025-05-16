import React, { useState } from "react";
import styled from "styled-components";
import { GalleryProps } from "./gallery.types";
import { Image } from "./gallery.types";

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const GalleryItem = styled.div`
  margin: 10px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  position: relative;
  width: 300px;
  &:hover {
    transform: scale(1.05);
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const ImageTitleOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

const FullSizeImageOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
`;

const FullSizeImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 90vw;
    max-height: 90vh;
    width: auto;
    height: auto;
    margin: auto;
    object-fit: scale-down;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
`;

const Gallery: React.FC<GalleryProps> = ({ title, description, images }) => {
  const [fullSizeImage, setFullSizeImage] = useState<string | null>(null);

  const handleImageClick = (image: Image) => {
    if (image.link) {
      window.open(image.link, "_blank");
    } else {
      setFullSizeImage(image.src);
    }
  };

  const handleCloseFullSizeImage = () => {
    setFullSizeImage(null);
  };

  return (
    <div>
      {title && <h2 style={{ textAlign: "center" }}>{title}</h2>}
      {description && (
        <p style={{ textAlign: "center", marginBottom: "20px" }}>
          {description}
        </p>
      )}
      <GalleryContainer>
        {images.map((image: Image, index: number) => (
          <GalleryItem key={index} onClick={() => handleImageClick(image)}>
            <Thumbnail src={image.src} alt={image.alt} />
            {image.title && (
              <ImageTitleOverlay>
                <h3 style={{ margin: 0 }}>{image.title}</h3>
              </ImageTitleOverlay>
            )}
          </GalleryItem>
        ))}
      </GalleryContainer>
      {fullSizeImage && (
        <FullSizeImageOverlay onClick={handleCloseFullSizeImage}>
          <FullSizeImageContainer>
            <img
              src={fullSizeImage}
              alt="Full size image"
              onClick={(e) => e.stopPropagation()}
            />
          </FullSizeImageContainer>
        </FullSizeImageOverlay>
      )}
    </div>
  );
};

export default Gallery;
