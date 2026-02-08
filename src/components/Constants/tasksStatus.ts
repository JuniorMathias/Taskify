import type { Task } from "../../types/Task";

export const TASK_STATUS_LABELS: Record<Task["status"], string> = {
  todo: "To Do",
  progress: "Progress",
  completed: "Completed",
};

export const COLUMNS: Array<{ status: Task["status"]; title: string }> = [
  { status: "todo", title: "To Do" },
  { status: "progress", title: "In Progress" },
  { status: "completed", title: "Completed" },
];
