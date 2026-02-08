import type { Task } from "../../types/Task";
import { TaskCard } from "../TaskCard";
import { Wrapper, Title } from "./styles";

interface Props {
  title: string;
  status: Task["status"];
  tasks: Task[];
  onMove: (id: number, status: Task["status"]) => void;
  onDelete: (id: number) => void;
}

export function Column({ title, status, tasks, onMove, onDelete }: Props) {
  return (
    <Wrapper>
      <Title status={status}>{title}</Title>

      {tasks
        .filter(t => t.status === status)
        .map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onMove={onMove}
            onDelete={onDelete}
          />
        ))}
    </Wrapper>
  );
}
