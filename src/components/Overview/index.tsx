import type { Task } from "../../types/Task";
import { Wrapper, Title, Total, CirclesWrapper } from "./styles";
import { TASK_STATUS_LABELS } from "../Constants/tasksStatus";

export function Overview({ tasks }: { tasks: Task[] }) {
  const totalTask = tasks.length;
  return (
    <Wrapper>
      <Total>
        Total: {totalTask}
      </Total>

      <CirclesWrapper>
        {Object.entries(TASK_STATUS_LABELS).map(([status, label]) => {
          const count = tasks.filter(t => t.status === status).length;
          const percentage = totalTask > 0 ? ((count / totalTask) * 100).toFixed(1) : "0";
        
          return (
            <Title key={status} status={status as Task["status"]}>
              {label} {count} 
              <br />
              ({percentage}%)
            </Title>
          );
        })}
      </CirclesWrapper>
    </Wrapper>
  );
}

