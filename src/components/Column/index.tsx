import type { Task } from "../../types/Task";
import { HideShowButton } from "../Button/hideShowButton";
import { TaskCard } from "../TaskCard";
import { Wrapper, Title } from "./styles";
import { useState } from "react";

interface Props {
  title: string;
  status: Task["status"];
  tasks: Task[];
  onMove: (id: number, status: Task["status"]) => void;
  onDelete: (id: number) => void;
}

export function Column({ title, status, tasks, onMove, onDelete }: Props) {
  const [showHide, setShowHide] = useState(true);

  return (
    <Wrapper>
      <Title status={status}>
        {title} 
        <HideShowButton 
          onClick={() => setShowHide(!showHide)}
          mode={showHide}
        />

      </Title>

    {showHide &&
      tasks
        .filter(t => t.status === status)
        .map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onMove={onMove}
            onDelete={onDelete}
          />
        ))
    }

    </Wrapper>
  );
}
