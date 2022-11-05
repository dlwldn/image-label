import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import PaintBrush from "./components/common/PaintBrush";
import baseAxios from "./lib/api/http";
import { toolState, ToolStateType } from "./lib/store/tools";
import { getCursorShape } from "./lib/util/util";
import { ImageType } from "./types/image";

function App() {
  const [image, setImage] = useState<ImageType | null>(null);
  const [tool, setTool] = useRecoilState(toolState);

  useEffect(() => {
    baseAxios.get<ImageType>("/photos/10").then((res) => {
      setImage(res.data);
    });
  }, []);

  if (!image) return <div></div>;

  return (
    <BoardWrapper currentTool={tool}>
      <ImageWrapper>
        <PaintBrush />
        <Image imageUrl={image?.url} />
      </ImageWrapper>
    </BoardWrapper>
  );
}

export default App;

const BoardWrapper = styled.div<{ currentTool: ToolStateType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: ${({ currentTool }) => getCursorShape(currentTool)};
`;
const ImageWrapper = styled.div`
  position: relative;
`;
const Image = styled.div<{ imageUrl: string }>`
  background-image: url(${({ imageUrl }) => imageUrl});
  background-repeat: no-repeat;
  background-position: center;
  width: 600px;
  height: 600px;
`;
