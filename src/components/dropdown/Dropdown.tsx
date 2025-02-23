import React from 'react';
import styled from 'styled-components';

interface DropdownProps {
  buttonText: string;
  menuItems: string[];
  disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ buttonText, menuItems }) => {
  return (
    <StyledDropdown>
      <StyledButton>{buttonText}</StyledButton>
      <StyledMenu>
        {menuItems.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </StyledMenu>
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div`
  position: relative;
`;

const StyledButton = styled.button`
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`;

const StyledMenu = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  padding: 10px;

  ${StyledDropdown}:hover & {
    display: block;
  }
`;

export default Dropdown;