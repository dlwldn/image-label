import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import { ReactComponent as ToolbarSelect } from "../../lib/assets/svg/Toolbar_select.svg";
import { ReactComponent as Square } from "../../lib/assets/svg/Bounding_Box_Create.svg";
import { useRecoilState } from "recoil";
import { toolState, ToolStateType } from "../../lib/store/tools";
import tools from "../../lib/consts/tools";

const Navigation = () => {
  const [mode, setMode] = useRecoilState(toolState);

  const handleClickButton = (tool: ToolStateType) => {
    setMode(tool);
  };

  return (
    <NavigationWrapper>
      <Button
        type="button"
        onClick={() => handleClickButton(tools.SELECT)}
        isActive={mode === tools.SELECT}
      >
        <ToolbarSelect />
      </Button>
      <Button
        type="button"
        onClick={() => handleClickButton(tools.SQUARE)}
        isActive={mode === tools.SQUARE}
      >
        <Square />
      </Button>
    </NavigationWrapper>
  );
};

export default Navigation;

const NavigationWrapper = styled.nav`
  width: 55px;
  height: 100%;
  padding: 8px;
  border-right: 1px solid ${colors.gray2};
  border-bottom: 1px solid ${colors.gray2};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button<{ isActive: boolean }>`
  width: 40px;
  height: 40px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  background-color: ${({ isActive }) =>
    isActive ? colors.gray3 : colors.gray1};
`;
