import styled from "styled-components";
import { NavbarProps } from "./navbar.types";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const StyledNavbarTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledNavbarLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

const StyledNavbarLink = styled.li`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

const StyledNavbarLinkAnchor = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #ccc;
  }
`;

export function Navbar({ title, links }: NavbarProps) {
  return (
    <StyledNavbar>
      <StyledNavbarTitle>{title}</StyledNavbarTitle>
      {links.length > 0 && (
        <StyledNavbarLinks>
          {links.map((link, index) => (
            <StyledNavbarLink key={index}>
              <StyledNavbarLinkAnchor href={link.href}>
                {link.text}
              </StyledNavbarLinkAnchor>
            </StyledNavbarLink>
          ))}
        </StyledNavbarLinks>
      )}
    </StyledNavbar>
  );
}
