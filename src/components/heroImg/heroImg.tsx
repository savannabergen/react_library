import React from "react";
import styled from "styled-components";
import { HeroImgProps } from "./heroImg.types";

const StyledHeroImgEnabled = styled("img")`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const StyledHeroImgDisabled = styled("img")`
  width: 100%;
  height: 500px;
  object-fit: cover;
  opacity: 0.5;
  pointer-events: none;
`;

const HeroImg: React.FC<HeroImgProps> = ({ src, alt, disabled }) => {
  const ImgComponent = disabled ? StyledHeroImgDisabled : StyledHeroImgEnabled;
  return <ImgComponent src={src} alt={alt} />;
};

export default HeroImg;
