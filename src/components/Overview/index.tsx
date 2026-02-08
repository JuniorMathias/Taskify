import type { Task } from "../../types/Task";
import { Wrapper, Title, Total, CirclesWrapper } from "./styles";
import { TASK_STATUS_LABELS } from "../Constants/tasksStatus";

export function Overview({ tasks }: { tasks: Task[] }) {
  return (
    <Wrapper>
      <Total>
        Total: {tasks.length}
      </Total>

      <CirclesWrapper>
        {Object.entries(TASK_STATUS_LABELS).map(([status, label]) => {
          const count = tasks.filter(t => t.status === status);

          return (
            <Title key={status} status={status as Task["status"]}>
              {label} {count.length}
            </Title>
          );
        })}
      </CirclesWrapper>
    </Wrapper>
  );
}

