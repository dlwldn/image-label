import { ToolStateType } from "../store/tools";

export const getCursorShape = (tool: ToolStateType) => {
  switch(tool) {
    case 'select':
      return 'default'
    case 'square':
      return 'crosshair'
    
    default: 
      return 'default'
  }
}