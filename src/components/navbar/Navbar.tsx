import styled from "styled-components";
import { NavbarProps } from "./navbar.types";

const StyledNavbar = styled.nav<{ theme: "light" | "dark" }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.theme === "light" ? "#f9f9f9" : "#333"};
  color: ${(props) => (props.theme === "light" ? "#333" : "#fff")};
  padding: 1rem;
  box-shadow: 0 2px 4px
    ${(props) =>
      props.theme === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.5)"};
  border-bottom: ${(props) =>
    props.theme === "light" ? "1px solid #ddd" : "none"};
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

const StyledLink = styled.a<{ theme: "light" | "dark" }>`
  color: ${(props) => (props.theme === "light" ? "#337ab7" : "#fff")};
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${(props) => (props.theme === "light" ? "#23527c" : "#ccc")};
  }
`;

export function Navbar({
  title,
  logo,
  links,
  LinkComponent,
  theme = "light",
}: NavbarProps) {
  return (
    <StyledNavbar theme={theme}>
      {logo ? (
        <img
          src={logo.src}
          alt={logo.alt}
          style={{ height: "2rem", marginRight: "1rem" }}
        />
      ) : (
        <StyledNavbarTitle>{title}</StyledNavbarTitle>
      )}
      {links.length > 0 && (
        <StyledNavbarLinks>
          {links.map((link, index) => (
            <StyledNavbarLink key={index}>
              {LinkComponent ? (
                <LinkComponent to={link.href}>{link.text}</LinkComponent>
              ) : (
                <StyledLink
                  theme={theme}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (link.onClick) {
                      link.onClick();
                    }
                  }}
                >
                  {link.text}
                </StyledLink>
              )}
            </StyledNavbarLink>
          ))}
        </StyledNavbarLinks>
      )}
    </StyledNavbar>
  );
}
