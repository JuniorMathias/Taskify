import { ModeBtn } from "./styles";
import { MdModeNight } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import type { ButtonProps } from "../InterfaceBtn/interfacebtn";

export function ModeButton({ onClick, mode }: ButtonProps) {
  return (
    <ModeBtn onClick={onClick} aria-label="Toggle dark/light mode" title="Toggle dark/light mode">
      {
        mode ?
        <MdOutlineDarkMode size={20} /> :
        <MdModeNight size={20} />
      }
    </ModeBtn>
  );
}
