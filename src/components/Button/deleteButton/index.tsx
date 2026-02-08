import { DeleteBtn } from "./styles";
import { FiTrash2 } from "react-icons/fi";
import type { ButtonProps } from "../InterfaceBtn/interfacebtn";

export function DeleteButton({ onClick }: ButtonProps) {
  return (
    <DeleteBtn onClick={onClick} aria-label="Delete task" title="Delete task">
      <FiTrash2 size={16} />
    </DeleteBtn>
  );
}
