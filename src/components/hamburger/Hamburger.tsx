import React, { useState } from "react";
import { HamburgerProps } from "./hamburger.types";
import styled from "styled-components";

interface MenuBtnProps {
  size: number;
}

const MenuBtn = styled.div<MenuBtnProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &.open .menu-btn__burger {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
  }
  &.open .menu-btn__burger::before {
    transform: rotate(45deg) translate(35px, -35px);
  }
  &.open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }
`;

const MenuBtnBurger = styled.div`
  width: 50px;
  height: 6px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 6px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
    transition: all 0.5s ease-in-out;
  }
  &::before {
    transform: translateY(-16px);
  }
  &::after {
    transform: translateY(16px);
  }
`;

const Hamburger: React.FC<HamburgerProps> = ({
  isOpen = false,
  onToggle,
  className,
  style,
  size = 50,
}) => {
  const [menuOpen, setMenuOpen] = useState(isOpen);
  const handleToggle = () => {
    setMenuOpen(!menuOpen);
    if (onToggle) {
      onToggle(!menuOpen);
    }
  };

  return (
    <MenuBtn
      size={size}
      data-testid="hamburger-button"
      className={`${className} ${menuOpen ? "open" : ""}`}
      style={style}
      onClick={handleToggle}
    >
      <MenuBtnBurger className="menu-btn__burger" />
    </MenuBtn>
  );
};

export default Hamburger;
