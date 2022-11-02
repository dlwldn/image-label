import React, { useEffect, useRef, useState, MouseEvent } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";

const PaintBrush = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [isDraw, setIsDraw] = useState(false);
  const [pos, setPos] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setCtx(canvas.getContext("2d"));
  }, []);

  const drawStart = (e: MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;
    setIsDraw(true);
    setPos([
      e.clientX - canvasRef.current.getBoundingClientRect().left,
      e.clientY - canvasRef.current.getBoundingClientRect().top,
    ]);
  };

  const drawSquare = (e: MouseEvent<HTMLCanvasElement>) => {
    if (!isDraw || !ctx || !canvasRef.current) return;
    let currentX =
      e.clientX -
      canvasRef.current.offsetLeft -
      canvasRef.current.getBoundingClientRect().left;
    let currentY =
      e.clientY -
      canvasRef.current.offsetTop -
      canvasRef.current.getBoundingClientRect().top;

    ctx.lineWidth = 5;
    ctx.strokeStyle = colors.blue1;
    ctx.fillStyle = "rgba(86,104,217, 0.4)";
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.strokeRect(pos[0], pos[1], currentX - pos[0], currentY - pos[1]);
    ctx.fillRect(pos[0], pos[1], currentX - pos[0], currentY - pos[1]);
  };

  const drawEnd = () => {
    setIsDraw(false);
  };

  return (
    <Canvas
      ref={canvasRef}
      width={600}
      height={600}
      onMouseDown={drawStart}
      onMouseMove={drawSquare}
      onMouseUp={drawEnd}
    />
  );
};

export default PaintBrush;

const Canvas = styled.canvas`
  position: absolute;
  z-index: 5;
`;
