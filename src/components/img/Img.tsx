import React from 'react';

interface ImgProps {
src: string;
alt: string;
}

const Img: React.FC<ImgProps> = ({ src, alt }) => {
return <img src={src} alt={alt} />;
};

export default Img;