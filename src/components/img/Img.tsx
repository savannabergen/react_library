import React from 'react';
import styled from 'styled-components';

interface ImgProps {
src: string;
alt: string;
}

const StyledImg = styled.img/* add your styles here */;

const Img: React.FC<ImgProps> = ({ src, alt }) => {
return <StyledImg src={src} alt={alt} />;
};

export default Img;