import { useState } from "react";
import { Form } from "./styles";
import { AddButton } from "../Button/addButton";
import { InsertInput } from "../Input/insertInput";

interface Props {
  onAdd: (title: string) => void;
}

export function TaskForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;

    setTitle("");
  }

  return (
    <Form onSubmit={submit}>
      <InsertInput
        value={title}
        placeholder="Add new task..."
        onChange={setTitle}
      />
      <AddButton onClick={() => onAdd(title)} />
    </Form>
  );
}
