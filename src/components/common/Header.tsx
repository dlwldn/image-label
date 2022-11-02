import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Dataset Label</h1>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  height: 64px;
  background-color: ${colors.gray1};
  padding: 0 60px;
  border-bottom: 1px solid ${colors.gray2};
  display: flex;
  align-items: center;
  font-weight: 700;
`;
