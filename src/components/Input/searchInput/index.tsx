import { SearchInsert } from "./styles";
import type { InputProps } from "../zInterfaceInput";

export function InsertInput({value, placeholder,onChange,}: InputProps) {
  return (
    <SearchInsert
      value={value}
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}
    />
  );
}
