import React from "react";
import styled from "styled-components";
import { ImgProps } from "./img.types";

const enabledStyles = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  opacity: 1;
  pointer-events: auto;
`;

const disabledStyles = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  opacity: 0.5;
  pointer-events: none;
`;

const Img: React.FC<ImgProps> = ({ src, alt, disabled }) => {
  const ImgComponent = disabled ? disabledStyles : enabledStyles;
  return <ImgComponent src={src} alt={alt} />;
};

export default Img;
