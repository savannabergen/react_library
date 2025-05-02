import React, { useState } from "react";
import styled from "styled-components";
import { HamburgerProps, MenuBtnProps } from "./hamburger.types";

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
    background: transparent;
    box-shadow: none;
  }
  &.open .menu-btn__burger::before {
    transform: rotate(45deg) translate(6px, 6px);
  }
  &.open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(6px, -6px);
  }
`;

const MenuBtnBurger = styled.div`
  width: 50px;
  height: 6px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2);
  transition: all 0.5s ease-in-out;
  position: relative;
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
  size = 80,
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
