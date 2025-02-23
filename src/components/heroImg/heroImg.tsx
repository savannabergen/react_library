import React from 'react';
import styled from 'styled-components';

interface HeroImgProps {
src: string;
alt: string;
}

const StyledHeroImg = styled('img')`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const HeroImg: React.FC<HeroImgProps> = ({ src, alt }) => {
return <StyledHeroImg src={src} alt={alt} />;
};

export default HeroImg;