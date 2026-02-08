import { AddBtn } from "./styles";
import { FaPlusSquare } from "react-icons/fa";
import type { ButtonProps } from "../InterfaceBtn/interfacebtn";

export function AddButton({ onClick }: ButtonProps) {
  return (
    <AddBtn onClick={onClick} aria-label="Add task" title="Add task">
      <FaPlusSquare size={16} />
    </AddBtn>
  );
}
