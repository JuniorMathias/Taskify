import type { Task } from "../../types/Task";
import { Card, Actions } from "./styles";
import { TASK_STATUS_LABELS } from "../Constants/tasksStatus";
import { DeleteButton } from "../Button/deleteButton";

interface Props {
  task: Task;
  onMove: (id: number, status: Task["status"]) => void;
  onDelete: (id: number) => void;
}

export function TaskCard({ task, onMove, onDelete }: Props) {
  return (
    <Card>
      {task.title}

      <Actions>
        {(Object.keys(TASK_STATUS_LABELS) as Task["status"][])
          .filter(status => status !== task.status)
          .map(status => (
            <button
              key={status}
              onClick={() => onMove(task.id, status)}
            >
              {TASK_STATUS_LABELS[status]}
            </button>
          ))}
          <DeleteButton onClick={() => onDelete(task.id)} />
      </Actions>
    </Card>
  );
}
