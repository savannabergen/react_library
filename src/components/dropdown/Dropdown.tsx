import React, { useCallback } from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;

const StyledLi = styled.li`
  float: left;
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover {
    background-color: red;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f9f9;
  }
`;

interface DropdownProps {
  onClick?: (action: string) => void;
  disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ onClick }) => {
  const handleClick = useCallback((action: string) => {
    if (!action) return;
    if (onClick) onClick(action);
  }, [onClick]);

  return (
    <StyledUl>
      <StyledLi>
        <a onClick={() => handleClick("Home")}>Home</a>
      </StyledLi>
      <StyledLi>
        <a onClick={() => handleClick("News")}>News</a>
      </StyledLi>
      <DropDownLi>
        <Dropbtn>DropDown</Dropbtn>
        <DropDownContent>
          <SubA onClick={() => handleClick("Link1")}>Link 1</SubA>
          <SubA onClick={() => handleClick("Link2")}>Link 2</SubA>
          <SubA onClick={() => handleClick("Link3")}>Link 3</SubA>
        </DropDownContent>
      </DropDownLi>
    </StyledUl>
  );
};

export default Dropdown;