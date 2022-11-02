import { atom } from "recoil";
import recoilKeys from "../consts/recoilKeys";
import tools from "../consts/tools";

export type ToolStateType = "select" | "square";

export const toolState = atom<ToolStateType>({
  key: recoilKeys.MODE,
  default: tools.SELECT,
});
