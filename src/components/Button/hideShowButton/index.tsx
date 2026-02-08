import { HideButtonBtn } from "./styles";
import type { ButtonProps } from "../InterfaceBtn/interfacebtn";
import { BiHide } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";

export function HideShowButton({ onClick, showHide }: ButtonProps) {
  const isShowHide = showHide ? "Show" : "Hide"

  return (
    <HideButtonBtn 
      onClick={onClick} 
      aria-label={`${isShowHide} task`}
      title={`${isShowHide} task`}>
       {showHide ? 
            <BiHide size={16} /> : 
            <BiShowAlt size={16} />
        }
    </HideButtonBtn>
  );
}
