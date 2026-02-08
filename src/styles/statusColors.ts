import type { Task } from "../types/Task";

export const statusColors: Record<Task["status"], string> = {
  todo: "#e8c904ff",
  progress: "#60a5fa",
  completed: "#4ade80",
};
