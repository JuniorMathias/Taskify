export type TaskStatus = "todo" | "progress" | "completed";

export interface Task {
  id: number;
  title: string;
  status: TaskStatus;
}
